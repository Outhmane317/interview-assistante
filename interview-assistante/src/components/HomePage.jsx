import React from "react";

const HomePage = ({setFile, setAudioStream}) => {

  const handleAudioChange = (e) =>{
    setAudioStream(e.target.files[0])
  }
  const handleFileChange = (e) =>{
    setFile(e.target.files[0])
  }
  
  return (
    <main className="flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl ">
      Interview<span className=" text-blue-400 font-bold">Assistante</span>
    </h1>
    <button onChange={handleAudioChange} className="flex items-center gap-4 text-base justify-between mx-auto w-72 max-w-full specialBtn px-4 py-2 rounded-xl">
      <p className="text-blue-400">Record</p>
      <i className="fa-solid fa-microphone"></i>
    </button>
    <p className="text-base">
      Or <label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">Upoload <input onChange={ handleFileChange}  className="hidden" type="file" accept='.mp3, .wav' /></label>
      a mp3 file
    </p>

    <p>Dont forget to enjoy your interview proccess</p>
    </main>
  );
};

export default HomePage;
