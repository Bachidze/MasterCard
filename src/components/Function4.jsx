import React from 'react'

const Function4 = ({handleCvcNumberChange,cvc}) => {
  return (
    <div>
           <h4 className='cvc'>CVC</h4>
              <input
                onChange={handleCvcNumberChange}
                style={{ border: cvc ? '2px solid red' : '2px solid grey' }}
                className='lastninp'
                type='text'
                maxLength={3}
                placeholder='e.g. 123'
                required
              />
              {cvc && <p style={{ color: 'red' }}>{cvc}</p>}
    </div>
  )
}

export default Function4