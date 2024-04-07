'use client'

import Container from './Container';
import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks';
import Button from './Button';

const Header = () => {
  return (
    <header>
        <nav>
            <Container className="relative z-50 flex justify-between py-8">
                {/* logo*/}
                <div className='relative z-10'>
                    <Logo/>
                </div>
                {/*Nav links */}
                <div className='hidden lg:flex lg:gap-10 item-center'>
                    <NavLinks />
                </div>
                {/* Buttons*/}
                <div className='flex items-center gab-6'>
                    <button href="#" variant="outline" className="hidden lg:block">
                        Profile 
                    </button>
                </div>
                {/*Mobile NavLinks*/}
            </Container>
        </nav>
    </header>
  )
}

export default Header

