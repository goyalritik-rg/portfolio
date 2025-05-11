const EmptyState = ({ setInput }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="w-20 h-20 mb-6 relative">
        <div className="absolute inset-0 bg-lime-500/20 rounded-full animate-ping"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600  rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-medium text-indigo-400 mb-2">
        Let&apos;s chat!
      </h3>
      <p className="text-sm text-gray-400 max-w-xs mb-6">
        I&apos;m here to answer questions about my skills, projects, and
        experience.
      </p>
      <div className="flex flex-wrap justify-center gap-2 max-w-xs">
        {["Tell me about your skills", "Recent projects?", "Contact info"].map(
          (suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              className="px-3 py-1.5 cursor-pointer bg-gray-800 hover:bg-gray-700 border border-lime-800/30 rounded-full text-xs text-gray-300 transition-colors"
            >
              {suggestion}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default EmptyState;
