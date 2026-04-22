import React from 'react'
import Image from 'next/image'
import logo from '../../../public/Hydro.png'
const ImgPage = () => {
  return (
    <div>
      <h1>
        This is image page of Next.js
      </h1>
      <div>
        <Image height="25" width="25" src="/dollar 1.png" alt='dollar'></Image>
      </div>
      <div>
        <Image height="200" width="200" src="/Hydro.png" alt='Guild Logo'></Image>
      </div>
      <div>
        <Image height="200" width="200" src={logo} alt='logo alternative way'></Image>
      </div>
    </div>
  )
}

export default ImgPage
