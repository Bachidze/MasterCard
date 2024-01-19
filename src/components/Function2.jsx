import React from 'react'

const Function2 = ({handleCardNumberChange,codeError,InputMask}) => {
  return (
    <div>
                <h4 className='secondinp'>Card Number</h4>
          <InputMask
            onChange={handleCardNumberChange}
            style={{ border: codeError ? '2px solid red' : '2px solid grey' }}
            mask='9999 9999 9999 9999'
            maskChar='_'
            className='firstinp'
            type='text'
            name='number'
            placeholder='e.g 1234 5678 9123'
            required
          />
          {codeError && <p style={{ color: 'red' }}>{codeError}</p>}
    </div>
  )
}

export default Function2