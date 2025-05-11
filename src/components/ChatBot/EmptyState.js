import Sparkle from "@/common/svgs/Sparkle";

const EmptyState = ({ setInput }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="w-16 h-16 mb-6 relative">
        <div
          className={`absolute inset-0 bg-slate-700 opacity-20 rounded-full animate-ping`}
        ></div>

        <div
          className={`absolute inset-0 bg-slate-700 rounded-full flex items-center justify-center shadow-lg`}
        >
          <Sparkle className={`fill-sky-300 size-10`} />
        </div>
      </div>

      <h3 className={`text-xl font-semibold text-sky-400 mb-2`}>
        Ready to Chat?
      </h3>

      <p className="text-sm text-gray-400 max-w-xs mb-8">
        Ask me about my portfolio, skills, or how I can help with your projects.
      </p>

      <div className="flex flex-wrap justify-center gap-2 max-w-sm">
        {["Explore skills", "View projects", "Get in touch"].map(
          (suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              className="px-4 py-2 cursor-pointer bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full text-xs text-gray-300 transition-colors"
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
