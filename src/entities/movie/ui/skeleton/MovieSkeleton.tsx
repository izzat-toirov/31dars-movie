const MovieCardSkeleton = () => {
    return (
      <div className="bg-white dark:bg-slate-900 mt-5 animate-pulse">
        <div className="w-full h-[360px] bg-gray-300 rounded-md"></div>
  
        <div className="p-3 flex flex-col gap-3">
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
          <div className="w-16 h-5 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default MovieCardSkeleton;
  