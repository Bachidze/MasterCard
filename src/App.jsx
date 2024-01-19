import { useState } from 'react';
import './App.css';
import InputMask from 'react-input-mask';
import Function from './components/Function';
import Function2 from './components/Function2';
import Function3 from './components/Function3';
import Function4 from './components/Function4';
import Form from './components/Form';
import Thankyou from './components/Thankyou';

function App() {
  const [name, setName] = useState('Giorgi Bachidze');
  const [term, setTerm] = useState('11/24');
  const [mainDigit, setMainDigit] = useState('0000 0000 0000 0000');
  const [code, setCode] = useState('0 0 0');
  const [nameError, setNameError] = useState('');
  const [termError, setTermError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [cvc, setCvc] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateCardNumber = (cardNumber) => {
    if (cardNumber.replace(/\s/g, '').length !== 16) {
      setCodeError('Card number must be 16 digits');
      return false;
    } else {
      setCodeError('');
      return true;
    }
  };

  const validateCvcNumber = (cvcNumber) => {
    if (cvcNumber.length !== 3) {
      setCvc('CVC must be 3 digits');
      return false;
    } else {
      setCvc('');
      return true;
    }
  };

  const validateName = (nameValue) => {
    if (nameValue.length == 1 ) {
      setNameError('Name cannot be empty');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateTerm = (termValue) => {
    if (termValue.length == 1) {
      setTermError('Term cannot be empty');
      return false;
    } else {
      setTermError('');
      return true;
    }
  };

  const handleCardNumberChange = (e) => {
    const cardNumber = e.target.value;
    setMainDigit(cardNumber);

    validateCardNumber(cardNumber);
  };

  const handleCvcNumberChange = (e) => {
    const cvcNumber = e.target.value;
    setCode(cvcNumber);

    validateCvcNumber(cvcNumber);
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    validateName(nameValue);
  };

  const handleTermChange = (e) => {
    const termValue = e.target.value;
    setTerm(termValue);
    validateTerm(termValue);
  };

  const main = (e) => {
    const isValidCardNumber = validateCardNumber(mainDigit);
    const isValidCvc = validateCvcNumber(code);
    const isValidName = validateName(name);
    const isValidTerm = validateTerm(term);

    if (isValidCardNumber && isValidCvc && isValidName && isValidTerm) {
      setIsSubmitted(true);
    }
  };

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
              <h3>{term}</h3>
            </div>
          </div>
        </div>

        <div>
          {!isSubmitted ? (
            <>
              <Function handleNameChange={handleNameChange} nameError={nameError} />

              <Function2
                handleCardNumberChange={handleCardNumberChange}
                codeError={codeError}
                InputMask={InputMask}
              />

              <div className='lastflex'>
                <div className='mmyy'>
                  <Function3 handleTermChange={handleTermChange} termError={termError} />
                </div>

                <div className='lastdiv'>
                  <Function4 handleCvcNumberChange={handleCvcNumberChange} cvc={cvc} />
                </div>
              </div>
            </>
         ) :<Thankyou/>}

          <Form main={main} />
        </div>
      </div>

      <div className='bg'></div>
    </>
  );
}

export default App;


