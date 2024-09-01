import React from "react";

const FileDisplay = ({file, audioStream, handleAudioReset}) => {


  return (
    <main className="flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl ">
        This is your <span className=" text-blue-400 font-bold">Test</span>
      </h1>
      <div className=" mx-auto flex  text-left">
        <h1 className="font-semibold">Name :</h1>
        <p>{file?.name}</p>
      </div>
      <div className="">
      <button>Reste</button>
      <button>Submit</button>
      </div>
    </main>
  );
};

export default FileDisplay;
