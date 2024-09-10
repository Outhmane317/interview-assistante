import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FileDisplay from "./components/FileDisplay";

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [question, setQuestion] = useState("");
  const[submitQuestion, setSubmitQuestion] = useState(false)

  const isAudioAvailable = file || audioStream;

  const handleSubmitClick = () => {
    if (question.length == 0  || !isAudioAvailable) return null;
    setSubmitQuestion(true);
  };

  const handleAudioReset = () => {
    setAudioStream(null);
    setFile(null);
    setSubmitQuestion(false)
    setQuestion('')
  };

  return (
    <>
      <div className="flex flex-col max-w-[1000px] mx-auto w-full ">
        <section className="h-screen flex flex-col">
          <Header />

          {!submitQuestion ? (
            <HomePage
              setFile={setFile}
              setAudioStream={setAudioStream}
              question={question}
              setQuestion={setQuestion}
              handleSubmitClick={handleSubmitClick}
            />
          ) :
          ((
            <FileDisplay
              file={file}
              audioStream={audioStream}
              handleAudioReset={handleAudioReset}
              question={question}
            />
          ))
          }

          
        </section>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
