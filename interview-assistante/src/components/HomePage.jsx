import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const HomePage = ({ setFile, setAudioStream, question, setQuestion, handleSubmitClick }) => {

  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [recorderUrl, setRecorderUrl] = useState(null)
  const [audioChuks, setAudioChunks] = useState([])
  const [duration, setDuration] = useState(0)

  const mediaRecorder = useRef(null)

  const mimType = 'audio/webm'

  const startRecording = async () =>{
    let tempStream 
    console.log("strat recording");
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        {audio: true,
          video: false
        }
      )
      tempStream = stream
      
    } catch (error) {
      console.log(error.message);
    }
    setRecordingStatus('recording')
    setDuration(0)
    const media = new MediaRecorder(tempStream, {type: mimType})

    mediaRecorder.current = media

    mediaRecorder.current.start()

    let localAudioChucks = []

    mediaRecorder.current.ondataavailable = (e) =>{
      if(typeof e.data === 'undefined') return
      if( e.data.size === 0) return
      localAudioChucks.push(e.data)

    }
    setAudioChunks(localAudioChucks)

  }


  const stopRecording = async () =>{
    setRecordingStatus('inactive')
    console.log("stop recording")

    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = (e) =>{
      const audioBlob = new Blob(audioChuks, {type: mimType})
      setAudioStream(audioBlob)
      setRecorderUrl(URL.createObjectURL(audioBlob))
      setAudioChunks([])
      
    }
    // mediaStream.current.getTracks().forEach((track) => track.stop());
  }

  useEffect(()=>{
    if(recordingStatus == 'inactive' ){ return}

    const interval = setInterval(()=>{
      setDuration((prev) => prev + 1)
  }, 1000)


    return ()=> clearInterval(interval)
  })


  // const handleAudioChange = (e) => {
  //   setAudioStream(e.target.files[0]);
  // };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <main className="flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center space-y-7">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl ">
        Interview<span className=" text-blue-400 font-bold">Assistante</span>
      </h1>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your interview problem..."
        name="question"
        value={question}
        onChange={handleQuestionChange}
      ></textarea>
      <div className=" space-y-4 ">
        <button
          onClick={recordingStatus == 'recording' ? stopRecording :startRecording }
          
          className="flex items-center gap-4 text-base justify-between specialBtn px-4 py-2 rounded-xl w-[300px] sm:w-[500px]  mx-auto"
        >
          <p className="text-blue-400">{recordingStatus == 'inactive' ? 'Record' : 'Stop Recording'}</p>
          <div className="flex items-center gap-2">
            {duration !== 0 &&
            <p className="text-sm">{duration}s</p>
            }
            <i className={"fa-solid fa-microphone duration-200 " + (recordingStatus == 'recording' ? "text-rose-400" : ``)}></i>
          </div>
        </button>
          {/* <div>
            {recorderUrl && <audio src={recorderUrl} controls />}
          </div> */}
        <p className="text-base">
          Or{" "}
          <label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">
            Upoload{" "}
            <input
              onChange={handleFileChange}
              className="hidden"
              type="file"
              accept=".mp3, .wav"
            />
          </label>
          a mp3 file
        </p>
      </div>
      <div className="flex justify-end"> 
        <button className="specialBtn px-9 py-2 rounded-lg flex items-center gap-2" onClick={handleSubmitClick}>
          <p className="text-md">Submit</p>
          <i className="fa-solid fa-arrow-right"></i>{" "}
        </button>
      </div>
      {/* <p>Dont forget to enjoy your interview proccess</p> */}
    </main>
  );
};

export default HomePage;
