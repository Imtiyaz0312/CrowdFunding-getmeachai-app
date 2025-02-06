import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-gray-900 text-white flex justify-center items-center p-5'>
        <p className='text-center'>Copyright &copy; {currentYear} Get Me A Chai - All Rights Are Reserved</p>
    </footer>
  )
}

export default Footer