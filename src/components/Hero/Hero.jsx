import React from 'react'
import "./Hero.scss"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__title-flex">
                    <h1 className='hero__title1'>Новая</h1>
                    <h1 className='hero__title2'>колекция</h1>
                </div>
                <Link className='hero__link'>
                    Смотреть Новинки
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero