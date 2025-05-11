import { clsx } from "clsx";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const parseInlineContent = (text) => {
  const parts = [];
  let lastIndex = 0;

  const regex =
    /(\[([^\]]+)\]\(([^)]+)\))|(\*\*(.*?)\*\*|\*(.*?)\*|_(.*?)_|(https?:\/\/[^\s]+|www\.[^\s]+))/gi;

  let match;
  while ((match = regex.exec(text)) !== null) {
    const before = text.slice(lastIndex, match.index);
    if (before) parts.push(before);

    if (match[1]) {
      const anchorText = match[2];
      const anchorUrl = match[3];
      parts.push(
        <a
          key={match.index}
          href={anchorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline hover:text-sky-300 transition-colors"
        >
          Link
        </a>
      );
    } else if (match[4]) {
      const full = match[4];

      if (full.startsWith("**") && full.endsWith("**")) {
        parts.push(<strong key={match.index}>{full.slice(2, -2)}</strong>);
      } else if (full.startsWith("*") && full.endsWith("*")) {
        parts.push(<em key={match.index}>{full.slice(1, -1)}</em>);
      } else if (full.startsWith("_") && full.endsWith("_")) {
        parts.push(<em key={match.index}>{full.slice(1, -1)}</em>);
      } else {
        let url = full;
        if (!url.startsWith("http")) url = `https://${url}`;
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline hover:text-sky-300 transition-colors"
          >
            Link
          </a>
        );
      }
    }

    lastIndex = regex.lastIndex;
  }

  const remaining = text.slice(lastIndex);
  if (remaining) parts.push(remaining);

  return parts;
};

export const formatContent = (text) => {
  if (!text) return "";

  const lines = text.split("\n");

  return lines.map((line, index) => {
    const isBullet = line.trim().startsWith("* ");
    const content = isBullet ? line.trim().slice(2) : line;

    const parsed = parseInlineContent(content);

    if (isBullet) {
      return (
        <li key={index} className="ml-5 list-disc">
          {parsed}
        </li>
      );
    }

    return (
      <Fragment key={index}>
        {index > 0 && <br />}
        <span>{parsed}</span>
      </Fragment>
    );
  });
};
