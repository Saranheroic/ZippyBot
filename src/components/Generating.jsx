const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]  ${
        className || ""
      } text-base`}
    >
      <div className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        <img
          className="w-5 h-5 mr-4"
          src="src/assests/images/loading.png"
          alt="Loading"
        />
      </div>
      Job is generating<span className="animate-pulse">...</span>
    </div>
  );
};

export default Generating;
