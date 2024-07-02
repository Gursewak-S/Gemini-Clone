import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {
  // destructuring the object of context
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="UserIcon" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Gursewak</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest beautiful places to see on upcoming road trip</p>
                  <img src={assets.compass_icon} alt="CompassIcon" />
                </div>
                <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt=''/>
            </div>
            <div className="card">
                <p>Improve the readabilityof the following code</p>
                <img src={assets.code_icon} alt=''/>
            </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="UserIcon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="GeminiIcon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text" 
                placeholder="Enter a prompt here" 
              />
              <div className="search-box-icon">
                <img className="ic" src={assets.gallery_icon} alt="GalleryIcon" />
                <img className="ic" src={assets.mic_icon} alt="MicIcon" />
                {input ? (
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt="SendIcon"
                  />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638488069169109558-2959892032&p=privacy_notice&rd=1#privacy_notice">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
