import React from 'react'

const Input = ({searchQuery, onChange}) => {
  return (
    <div>
        <input type='text' defaultValue={searchQuery} onChange={onChange}/>
    </div>
  )
}

export default Input