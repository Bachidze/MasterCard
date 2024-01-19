import React from 'react'

const Form = ({main}) => {
  return (
    <div>
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
            className='form'
          >
            <button 
            onClick={main}
            >CONFIRM</button>
          </form>
    </div>
  )
}

export default Form