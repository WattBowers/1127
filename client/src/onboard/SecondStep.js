import './Onboard.css';
import { Link } from "react-router-dom";

const SecondStep = ({ setEmail, setUpdates, updates, email, onboardingData, setStep }) => {
    return (
        <div className="grid">
              <div className="input-bg2">
                <div className="container">
                  <div className='update-box'>
                    <label className="toggle-switch">
                      <input type="checkbox" onChange={() => setEmail(!email)}/>
                      <span className="switch" />
                      <span className='text'>{onboardingData[1][1].label}</span>
                    </label>
                  </div>
                  <div className='update-box'>
                    <label className="toggle-switch">
                      <input type="checkbox" onChange={() => setUpdates(!updates)}/>
                      <span className="switch"/>
                      <span className='text'>{onboardingData[1][2].label}</span>
                    </label>
                  </div>
                  <div className='button-box'>
                    <button onClick={() => setStep(1)} className='button'>Back</button>
                    <Link to='/home'><button  className='button float-right'>Finish</button></Link>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default SecondStep