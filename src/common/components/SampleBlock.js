function Corner({ left, right, bottom, top }) {
  return (
    <div
      style={{ left, top, right, bottom }}
      className="absolute border-2 border-blue-500 w-3 h-3 bg-white z-1"
    ></div>
  );
}

const SampleBlock = ({ height = 440, width = 330, children, ...restProps }) => {
  return (
    <div className="border border-blue-500 relative" {...restProps}>
      <div className="absolute flex justify-center items-center -bottom-9 left-0 right-0">
        <div className="bg-blue-500 text-white font-semibold text-sm rounded-sm py-0.5 px-1 w-fit">{`${width} x ${height}`}</div>
      </div>

      <Corner left={-6} top={-6} />
      <Corner right={-6} top={-6} />
      <Corner bottom={-6} left={-6} />
      <Corner bottom={-6} right={-6} />

      {children}
    </div>
  );
};

export default SampleBlock;
