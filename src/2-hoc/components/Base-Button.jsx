import React from 'react'

const BaseButton = ({label, onClick}) => {
  return (
    <button onClick={onClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        {label}
    </button>
  )
}

export default BaseButton