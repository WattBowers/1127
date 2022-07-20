import './Onboard.css';

const FirstStep = ({ setStep, onboardingData, name, setName, lastName, setLastName, country, setCountry, bio, setBio }) => {
  
  const changeToBlue = (id) => {
     document.getElementById(id).style.backgroundColor = '#3A8DFF'
  }

  const changeToGrey = (id) => {
    document.getElementById(id).style.backgroundColor = '#D5DFEE';
  }

  const IsCompleted = () => {
    if(name === '' || country === '') {
      return (
        <button className="button disabled">Next</button>
      )
    } else {
      return (
        <button onClick={() => setStep(2)} className="button">Next</button>
      )
    }
  }
  
  return(
        <div className="grid">
              <div className="input-bg1">
                <div className="box">
                  <p className="box-label">{onboardingData[0][0].label}</p>
                  <input onChange={(e) => setName(e.target.value)} placeholder='Required' onFocus={() => changeToBlue(1)} onBlur={() => changeToGrey(1)} className="input" value={name}></input>
                  <div id='1' className="rest-base"></div>
                </div>
                <div className="box">
                  <p className="box-label">{onboardingData[0][1].label}</p>
                  <input onChange={(e) => setLastName(e.target.value)} onFocus={() => changeToBlue(2)} onBlur={() => changeToGrey(2)} className="input" value={lastName}></input>
                  <div id='2' className="rest-base"></div>
                </div>
                <div className="box">
                  <p className="box-label">{onboardingData[1][0].label}</p>
                  <input onChange={(e) => setCountry(e.target.value)} placeholder='Required' onFocus={() => changeToBlue(3)} onBlur={() => changeToGrey(3)} className="input" value={country}></input>
                  <div id='3' className="rest-base"></div>
                </div>
                <div className="box">
                  <p className="box-label">{onboardingData[0][2].label}</p>
                  <textarea onChange={(e) => setBio(e.target.value)} onFocus={() => changeToBlue(4)} onBlur={() => changeToGrey(4)} rows="5" className="textarea" value={bio}></textarea >
                  <div id='4' className="rest-base"></div>
                </div>
                <p className="error-text">Please fill out all required fields before proceeding</p>
                <div className="button-layout">
                  <IsCompleted />
                </div>
              </div>
              
            </div>
    )
}

export default FirstStep

//<button onClick={() => console.log(onboardingData)}>Cheeris</button>