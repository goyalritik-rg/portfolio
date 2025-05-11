import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";

import { GrPowerReset } from "react-icons/gr";
import { useAnimate } from "framer-motion";

// Tetris game constants
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 18;
const GAME_SPEED = 800;

// Tetromino shapes
const TETROMINOS = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: "#00FFFF",
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "#0000FF",
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "#FF8000",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#FFFF00",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: "#00FF00",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "#8000FF",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: "#FF0000",
  },
};

// Create a blank game board
const createBoard = () =>
  Array.from(Array(BOARD_HEIGHT), () => Array(BOARD_WIDTH).fill(0));

// Get a random tetromino
const getRandomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

const TetrisGame = ({ onReset = () => {} }) => {
  const [board, setBoard] = useState(createBoard());
  const [currentTetromino, setCurrentTetromino] = useState(null);
  const [nextTetromino, setNextTetromino] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const speedRef = useRef(GAME_SPEED);

  const [scope, animate] = useAnimate();

  const triggerAnimation = () =>
    animate(
      scope.current,
      { rotate: 360 },
      { duration: 1, repeat: Infinity, ease: "linear" }
    );

  const stopAnimation = () =>
    animate(scope.current, { rotate: 0 }, { duration: 0.5 });

  const onClick = () => {
    triggerAnimation();
    onReset();

    setTimeout(stopAnimation, 1000);
  };

  // Cell size calculation
  const CELL_SIZE = 18;

  // Toggle pause state
  const togglePause = useCallback(() => {
    if (gameOver) return;
    setIsPaused(!isPaused);
  }, [gameOver, isPaused]);

  // Initialize the game
  const initGame = useCallback(() => {
    setBoard(createBoard());
    setCurrentTetromino(getRandomTetromino());
    setNextTetromino(getRandomTetromino());
    setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setIsPlaying(true);
    setIsPaused(false);
    speedRef.current = GAME_SPEED;
  }, []);

  // Check for collision
  const checkCollision = useCallback(
    (tetromino, position) => {
      if (!tetromino) return false;

      for (let y = 0; y < tetromino.shape.length; y++) {
        for (let x = 0; x < tetromino.shape[y].length; x++) {
          // Skip if the cell is empty (0)
          if (!tetromino.shape[y][x]) continue;

          const boardX = position.x + x;
          const boardY = position.y + y;

          // Check if outside the board boundaries
          if (boardX < 0 || boardX >= BOARD_WIDTH || boardY >= BOARD_HEIGHT) {
            return true;
          }

          // Check if overlapping with something on the board
          if (boardY >= 0 && board[boardY][boardX]) {
            return true;
          }
        }
      }
      return false;
    },
    [board]
  );

  // Rotate the tetromino
  const rotateTetromino = useCallback(() => {
    if (!currentTetromino || gameOver || isPaused) return;

    const rotate = (matrix) => {
      const N = matrix.length;
      const result = Array.from({ length: N }, () => Array(N).fill(0));

      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          result[j][N - 1 - i] = matrix[i][j];
        }
      }
      return result;
    };

    const rotatedTetromino = {
      ...currentTetromino,
      shape: rotate(currentTetromino.shape),
    };

    // Check if rotation is valid
    if (!checkCollision(rotatedTetromino, position)) {
      setCurrentTetromino(rotatedTetromino);
    } else {
      // Try wall kicks (standard offset tests)
      const offsets = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: -1 },
        { x: 2, y: 0 },
        { x: -2, y: 0 },
      ];

      for (const offset of offsets) {
        const newPosition = {
          x: position.x + offset.x,
          y: position.y + offset.y,
        };
        if (!checkCollision(rotatedTetromino, newPosition)) {
          setCurrentTetromino(rotatedTetromino);
          setPosition(newPosition);
          return;
        }
      }
    }
  }, [currentTetromino, position, checkCollision, gameOver, isPaused]);

  // Check for completed lines
  const checkCompletedLines = useCallback((boardToCheck) => {
    const completedLines = [];
    boardToCheck.forEach((row, index) => {
      // If every cell in the row is filled (not 0)
      if (row.every((cell) => cell !== 0)) {
        completedLines.push(index);
      }
    });
    return completedLines;
  }, []);

  // Clear completed lines
  const clearLines = useCallback((boardToClear, linesToClear) => {
    const newBoard = [...boardToClear];

    // Remove the completed lines
    linesToClear.forEach((lineIndex) => {
      // Create a new empty line at the top
      newBoard.splice(lineIndex, 1);
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    });

    return newBoard;
  }, []);

  // Calculate score based on number of lines cleared
  const getScoreForLines = useCallback((lines, currentLevel) => {
    const lineScores = {
      1: 100,
      2: 300,
      3: 500,
      4: 800, // Tetris!
    };

    return (lineScores[lines] || 0) * currentLevel;
  }, []);

  // Move the tetromino
  const moveTetromino = useCallback(
    (direction) => {
      if (!currentTetromino || gameOver || isPaused) return;

      let newPosition = { ...position };

      switch (direction) {
        case "LEFT":
          newPosition.x -= 1;
          break;
        case "RIGHT":
          newPosition.x += 1;
          break;
        case "DOWN":
          newPosition.y += 1;
          break;
        default:
          return;
      }

      if (!checkCollision(currentTetromino, newPosition)) {
        setPosition(newPosition);
        return true;
      }

      // If we can't move down, it means we've hit something
      if (direction === "DOWN") {
        // Check if game over (hit the top)
        if (position.y <= 1) {
          setGameOver(true);
          setIsPlaying(false);

          // Update high score if needed
          if (score > highScore) {
            setHighScore(score);
          }
          return false;
        }

        // Add the tetromino to the board
        const newBoard = [...board];
        currentTetromino.shape.forEach((row, y) => {
          row.forEach((cell, x) => {
            if (cell) {
              const boardY = position.y + y;
              const boardX = position.x + x;
              if (
                boardY >= 0 &&
                boardY < BOARD_HEIGHT &&
                boardX >= 0 &&
                boardX < BOARD_WIDTH
              ) {
                newBoard[boardY][boardX] = currentTetromino.color;
              }
            }
          });
        });

        setBoard(newBoard);

        // Check for completed lines
        const completedLines = checkCompletedLines(newBoard);
        if (completedLines.length > 0) {
          const clearedBoard = clearLines(newBoard, completedLines);
          setBoard(clearedBoard);

          // Update score based on number of lines cleared
          const additionalScore = getScoreForLines(
            completedLines.length,
            level
          );
          setScore((prevScore) => prevScore + additionalScore);

          // Update level based on score
          const newLevel = Math.floor(score / 1000) + 1;
          if (newLevel > level) {
            setLevel(newLevel);
            speedRef.current = GAME_SPEED - (newLevel - 1) * 50;
          }
        }

        // Spawn new tetromino
        setCurrentTetromino(nextTetromino);
        setNextTetromino(getRandomTetromino());
        setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });
        return false;
      }

      return false;
    },
    [
      board,
      currentTetromino,
      nextTetromino,
      position,
      gameOver,
      isPaused,
      checkCollision,
      checkCompletedLines,
      clearLines,
      getScoreForLines,
      score,
      level,
      highScore,
    ]
  );

  // Handle hard drop
  const hardDrop = useCallback(() => {
    if (!currentTetromino || gameOver || isPaused) return;

    let newPosition = { ...position };
    while (
      !checkCollision(currentTetromino, {
        ...newPosition,
        y: newPosition.y + 1,
      })
    ) {
      newPosition.y += 1;
    }

    setPosition(newPosition);
    moveTetromino("DOWN"); // Lock the piece in place
  }, [
    currentTetromino,
    position,
    checkCollision,
    moveTetromino,
    gameOver,
    isPaused,
  ]);

  // Game update loop
  const gameLoop = useCallback(
    (timestamp) => {
      if (!isPlaying || isPaused || gameOver) {
        lastUpdateTimeRef.current = 0;
        return;
      }

      const elapsed = timestamp - lastUpdateTimeRef.current;

      if (elapsed > speedRef.current) {
        moveTetromino("DOWN");
        lastUpdateTimeRef.current = timestamp;
      }

      requestRef.current = requestAnimationFrame(gameLoop);
    },
    [isPlaying, isPaused, gameOver, moveTetromino]
  );

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault(); // Prevent default browser behavior
          moveTetromino("LEFT");
          break;
        case "ArrowRight":
          e.preventDefault(); // Prevent default browser behavior
          moveTetromino("RIGHT");
          break;
        case "ArrowDown":
          e.preventDefault(); // Prevent default browser behavior
          moveTetromino("DOWN");
          break;
        case "ArrowUp":
          e.preventDefault(); // Prevent default browser behavior
          rotateTetromino();
          break;
        case " ":
          e.preventDefault(); // Prevent default browser behavior
          hardDrop();
          break;
        case "p":
        case "P":
          e.preventDefault(); // Prevent default browser behavior
          togglePause();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [moveTetromino, rotateTetromino, hardDrop, gameOver, togglePause]);

  // Start/stop the game loop
  useEffect(() => {
    if (isPlaying && !isPaused && !gameOver) {
      requestRef.current = requestAnimationFrame(gameLoop);
    }

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, isPaused, gameOver, gameLoop]);

  // Render the game board with tetromino
  const renderBoard = useCallback(() => {
    // Create a copy of the board
    const displayBoard = board.map((row) => [...row]);

    // Add current tetromino to the display board
    if (currentTetromino) {
      currentTetromino.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            const boardY = position.y + y;
            const boardX = position.x + x;
            if (
              boardY >= 0 &&
              boardY < BOARD_HEIGHT &&
              boardX >= 0 &&
              boardX < BOARD_WIDTH
            ) {
              displayBoard[boardY][boardX] = currentTetromino.color;
            }
          }
        });
      });
    }

    return displayBoard;
  }, [board, currentTetromino, position]);

  // Render the next tetromino preview
  const renderNextTetromino = useCallback(() => {
    if (!nextTetromino) return null;

    return (
      <div className="next-tetromino-grid">
        {nextTetromino.shape.map((row, y) => (
          <div key={`next-row-${y}`} className="flex">
            {row.map((cell, x) => (
              <div
                key={`next-cell-${x}-${y}`}
                className={`cell ${cell ? "filled" : ""}`}
                style={{
                  backgroundColor: cell ? nextTetromino.color : "transparent",
                  width: "12px",
                  height: "12px",
                  border: cell ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }, [nextTetromino]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-black font-mono p-6">
      <GrPowerReset
        ref={scope}
        className="text-white absolute top-3 left-3 text-lg cursor-pointer"
        onClick={onClick}
      />

      <div className="flex gap-4 z-10 h-full w-full justify-between">
        {/* Game Board */}
        <div className="flex flex-col items-center">
          <div className="text-lime-400 mb-1 text-lg tracking-widest font-bold">
            TETRIS
          </div>
          <div
            className="grid gap-0 relative border-2 border-gray-700 bg-black/50"
            style={{
              gridTemplateColumns: `repeat(${BOARD_WIDTH}, ${CELL_SIZE}px)`,
              gridTemplateRows: `repeat(${BOARD_HEIGHT}, ${CELL_SIZE}px)`,
            }}
          >
            {renderBoard().map((row, y) =>
              row.map((cell, x) => (
                <div
                  key={`${x}-${y}`}
                  className="border border-gray-900"
                  style={{
                    backgroundColor: cell || "transparent",
                    boxShadow: cell
                      ? "inset 0 0 3px rgba(255, 255, 255, 0.5)"
                      : "none",
                  }}
                />
              ))
            )}

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="text-red-500 text-2xl mb-3 font-bold tracking-widest">
                    GAME OVER
                  </div>
                  <div className="text-lime-400 text-sm mb-3">
                    Score: {score}
                  </div>
                  <button
                    className="px-3 py-1 bg-lime-500 text-black text-sm font-bold rounded hover:bg-lime-400 transition"
                    onClick={initGame}
                  >
                    PLAY AGAIN
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Game Info */}
        <div className="flex flex-col justify-between h-[290px] text-lime-400 text-xs items-center">
          <div>
            <div className="mb-3">
              <div className="text-sm mb-1">SCORE</div>
              <div className="text-xl font-bold text-center">{score}</div>
            </div>

            <div className="mb-3">
              <div className="text-sm mb-1">LEVEL</div>
              <div className="text-xl font-bold text-center">{level}</div>
            </div>

            <div>
              <div className="text-sm text-center mb-2">NEXT</div>
              <div className="flex items-center justify-center">
                {renderNextTetromino()}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {!isPlaying && !gameOver ? (
              <button
                className="px-3 py-1 bg-lime-500 text-black text-sm font-bold rounded hover:bg-lime-400 transition"
                onClick={initGame}
              >
                START
              </button>
            ) : (
              <button
                className="p-1 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50"
                onClick={togglePause}
                disabled={gameOver}
              >
                {isPaused ? (
                  <IoPlayOutline size={20} />
                ) : (
                  <IoPauseOutline size={20} />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-1 text-white/70 text-[8px]">
        <div>Controls: Arrows | Space = Drop | P = Pause</div>
      </div>
    </div>
  );
};

export default TetrisGame;
