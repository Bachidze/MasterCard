import { useState } from 'react'
import './App.css'
import InputMask from 'react-input-mask';

function App() {
  const [name,setName] = useState('Giorgi Bachidze')
  const [term,setTerm] = useState('11/24')
  const [mainDigit,setMainDigit] = useState('0000 0000 0000 0000')
  const [code,setCode] = useState('0 0 0')
  const [error,setError] = useState('')
  


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
            <h3><span>{term}</span></h3>
            </div>

          </div>

      </div>

      <div>

        <h4 className='cardholder'>
          Cardholder Name
        </h4>

        <input
              style={{border:'2px solid red'}}              
              onChange={(e)=>setName(e.target.value)}
              className='firstinp' type="text" name="name"
               maxLength={23} placeholder='e.g Giorgi Bachidze'
               required
        />
        <p></p>

        <h4 className='secondinp'>
          Card Number
        </h4>

        <InputMask
          style={{border:'2px solid red'}} 
           mask='9999 9999 9999 9999'
           maskChar='_'
           onChange={(e)=>setMainDigit(e.target.value)}
           className='firstinp' type="text" name="number" 
           placeholder='e.g 1234 5678 9123'
           required 
        />
        <p></p>

        <div className='lastflex'>

          <div className='mmyy'> 
            <h4 className='monthyear'>Exp. Date (MM/YY)</h4>
            <input 
            style={{border:'2px solid red'}} 
            onChange={(e)=>setTerm(e.target.value)}
            className='littleinp' type="text" maxLength={2}
            placeholder='MM'
            required
            />
            <input 
             style={{border:'2px solid red'}} 
             onChange={(e)=>setTerm(e.target.value)}
             className='littleinp1' type="text" maxLength={2}
             placeholder='YY'
             required
             />
          </div>

          <div className='lastdiv'> 
            <h4 className='cvc'>CVC</h4>
            <input 
              style={{border:'2px solid red'}} 
              onChange={(e)=>setCode(e.target.value)}
              className='lastninp' type="nmuber" maxLength={3}
              placeholder='e.g. 123'
              required
              />
              
          </div>

        </div>

        <form onClick={(e)=>{
          e.preventDefault()
        }}  className='form'>
          <button>
            CONFIRM
          </button>
        </form>

      </div>

    </div>

    <div className='bg'>

    </div>

    </>
  )
}

export default App
