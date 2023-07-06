import React from 'react'
import foto from '../assets/img/header-19.png'
import Image from 'react-bootstrap/Image'


 export function Banner(){
  return (
    <div>
        <Image src={foto} fluid rounded/>
    </div>
  )
}

export default Banner;


