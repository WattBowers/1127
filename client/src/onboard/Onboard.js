import React, { useState, useEffect } from "react";
import axios from "axios";
import './Onboard.css';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';



const Onboard = () => {
    
    const [onboardingData, setOnboardingData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState(false);
    const [updates, setUpdates] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState('');
    
    useEffect(() => {
        getOnboarding();
      }, []);

      //get data from api
    const getOnboarding = () => {
        axios.get('/api/onboarding')
        .then((response) => {
            setOnboardingData(response.data.steps);
            setLoading(false);
        })
    };

    const changeEmail = () => {
      setEmail(!email)
    }

    const changeUpdates = () => {
      setUpdates(!updates)
    }


        
        if (isLoading) {
            return <></>;
          }
        if (step === 1) {
          return (
            <FirstStep setBio={setBio} bio={bio} setCountry={setCountry} country={country} setLastName={setLastName} lastName={lastName} setName={setName} name={name} setStep={setStep} setOnboardingData={setOnboardingData} onboardingData={onboardingData}/>
          )
        }  
        if (step === 2) {
          return (
            <SecondStep setStep={setStep} setEmail={changeEmail} setUpdates={changeUpdates} updates={updates} email={email} onboardingData={onboardingData}/>
          )
        }
    }

export default Onboard;

//<button onClick={() => console.log(onboardingData)}>Cheeris</button>
//                <h1>{onboardingData[0][0].label}</h1>