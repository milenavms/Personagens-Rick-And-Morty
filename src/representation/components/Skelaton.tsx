type SkelatonProps = {
  width?: string | number;
  height?: string | number;
};

const Skelaton: React.FC<SkelatonProps> = ({ width = 80, height = 16 }) => {
  //NOTE: width e height podem ser números (pixels) ou strings (ex: '20rem', '100%')
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <span
      className="inline-block bg-gray-200 rounded animate-pulse"
      style={style}
    />
  );
};

export default Skelaton;
