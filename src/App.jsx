import { useState } from 'react';
import './App.css';
import InputMask from 'react-input-mask';
import Function from './components/Function';
import Function2 from './components/Function2';
import Function3 from './components/Function3';
import Function4 from './components/Function4';
import Form from './components/Form';



function App() {
  const [name, setName] = useState('Giorgi Bachidze');
  const [term, setTerm] = useState('11/24');
  const [mainDigit, setMainDigit] = useState('0000 0000 0000 0000');
  const [code, setCode] = useState('0 0 0');
  const [nameError, setNameError] = useState('');
  const [termError, setTermError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardNumberChange = (e) => {
    const cardNumber = e.target.value;
    setMainDigit(e.target.value);

    if (cardNumber.length < 16) {
      setCodeError('Card number must be 16 digits');
    } else {
      setCodeError('');
    }
  };

  const handleCvcNumberChange = (e) => {
    const cardNumber = e.target.value;
    setCode(e.target.value);

    if (cardNumber.length < 3) {
      setCvc('Can’t be blank');
    } else {
      setCvc('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() === '') {
      setNameError('Cant Empty');
    } else {
      setNameError('');
    }
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
    if (e.target.value.trim() === '') {
      setTermError('Cant Be Empty');
    } else {
      setTermError('');
    }
  };

  const main = (e) => {
    handleCardNumberChange(e)
    handleCvcNumberChange(e)
    handleNameChange(e)
    handleTermChange(e)
  }
  return (
    <>
      <div className='flex'>
       
      <div>
          <div className='firstcard'>
            <div className='blackrectangle'></div>
            <div className='greyrectangle'>
              <h2>{code}</h2>
            </div>
          </div>

          <div className='secondcard'>
            <div className='firstround'></div>
            <div className='secondround'></div>
            <h1 className='zeros'>{mainDigit}</h1>

            <div className='insideflex'>
              <h3>{name}</h3>
              <h3>
                {term}
              </h3>
            </div>
          </div>
        </div>

        <div>
    
         <Function
         handleNameChange={handleNameChange}
         nameError={nameError}
         />

         <Function2
         handleCardNumberChange={handleCardNumberChange}
         codeError={codeError}
         InputMask={InputMask}
         />

            <div className='lastflex'>
              <div className='mmyy'>
              <Function3
              handleTermChange={handleTermChange}
              termError={termError}
              />
            </div>

            <div className='lastdiv'>
              <Function4
              handleCvcNumberChange={handleCvcNumberChange}
              cvc={cvc}
              />
            </div>
          </div>

        <Form
        main={main}
        />
        </div>
      </div>

      <div className='bg'></div>
    </>
  );
}

export default App;


