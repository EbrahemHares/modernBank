import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`px-6 py-4 bg-blue-gradient text-[18px] font-poppins font-medium text-primary outline-none ${styles} rounded-lg`}>
      Get Started!
    </button>
  )
}

export default Button