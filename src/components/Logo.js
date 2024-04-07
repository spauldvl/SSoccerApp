import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const Logo = (className,props) => {
  return (
    <Link href={"/"}>
        <h2 
        className={clsx(
            'text-3x1 font-bold text-gray-600 hover:text-gray-900 duration-300', 
        className
        )}
        {...props}
        >
            SSoccer App
        </h2>
    </Link>
  )
}

export default Logo