"use client"
import React from 'react'
import Link from 'next/link'
import { useThemeContext } from '../theme/page'


const contact = () => {
  const {background, setBackground} = useThemeContext()
  return (
    <>
      <div style= {{
        'background': background,
        'width': '500px',
        'height': '500px',
      }}>
        <button onClick={() => setBackground('lightblue')}>Switch</button>
      </div>
      <Link href="/cv">CV</Link>
    </>
  )
}

export default contact