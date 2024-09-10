import React from "react";

const FileDisplay = ({ file, audioStream, handleAudioReset, question }) => {
  return (
    <main className="flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center pb-20  w-fit max-w-full mx-auto ">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl ">
        This is your <span className=" text-blue-400 font-bold">Test</span>
      </h1>
      <div className="flex items-center justify-center text-lg md:text-xl gap-4 text-left my-4">
        <h3 className="font-semibold">Record :</h3>
        <audio
          className=""
          src={
            file ? URL.createObjectURL(file) : URL.createObjectURL(audioStream)
          }
          controls
        />
      </div>
      <div className="flex justify-between items-center gap-4 ">
        <button
          onClick={handleAudioReset}
          className="text-slate-400 hover:text-blue-600 duration-200"
        >
          Rest
        </button>
        <button className="specialBtn px-4 py-2 rounded-lg flex items-center gap-2 ">
          <p>Analyse</p>
          <i className="fa-solid fa-arrow-right"></i>{" "}
        </button>
      </div>
    </main>
  );
};

export default FileDisplay;
