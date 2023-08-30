'use client'
import React from 'react'
import Link from 'next/link'
import { useThemeContext } from '../theme/page'


const cv = () => {
  const {background, setBackground} = useThemeContext()
  return (
    <>
      <div style= {{
        'background': background,
        'width': '500px',
        'height': '500px',
      }}>
      </div>
      <Link href="/contact">Contact</Link>
    </>
  )
}

export default cv