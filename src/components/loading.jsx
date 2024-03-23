const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
        <div className="h-32 w-32 bg-cover bg-no-repeat bg-sun"></div>
        <h1>Getting Ready...</h1>
      </div>
    </>
  );
};

export default Loading;
