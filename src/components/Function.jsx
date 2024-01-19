import React from 'react'

const Function = ({handleNameChange,nameError}) => {
  return (
    <>
              <h4 className='cardholder'>Cardholder Name</h4>
          <input
            onChange={handleNameChange}
            style={{ border: nameError ? '2px solid red' : '2px solid grey' }}
            className='firstinp'
            type='text'
            name='name'
            maxLength={23}
            placeholder='e.g Giorgi Bachidze'
            required
            />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            </>
  )
}

export default Function