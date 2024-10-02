const SkeletonCard = () => {
  return (
    <div className="w-[500px] h-80 bg-gray-300 animate-pulse flex flex-col justify-end p-2 border border-transparent">
      <div className="bg-gray-400 w-full h-full bg-center rounded-lg"></div>
      <div className="flex items-center justify-between text-white mt-4">
        <div className="w-32 h-6 bg-gray-400 rounded"></div> {/* Placeholder para el nombre */}
        <div className="w-16 h-4 bg-gray-400 rounded"></div> {/* Placeholder para la fecha */}
      </div>
    </div>
  );
};

export default SkeletonCard;
