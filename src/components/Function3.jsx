import React from 'react'

const Function3 = ({handleTermChange,termError}) => {
  return (
    <div>
         <h4 className='monthyear'>Exp. Date (MM/YY)</h4>
              <input
                onChange={handleTermChange}
                style={{ border: termError ? '2px solid red' : '2px solid green' }}
                className='littleinp'
                type='text'
                maxLength={2}
                placeholder='MM'
                required
                />
                              <input
                onChange={handleTermChange}
                style={{ border: termError ? '2px solid red' : '2px solid green' }}
                className='littleinp1'
                type='text'
                maxLength={2}
                placeholder='YY'
                required
                />
                {termError && <p style={{ color: 'red' }}>{termError}</p>}
    </div>
  )
}

export default Function3