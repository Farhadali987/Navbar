import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
   
    <div className=' p-4 flex  border-4-red justify-between text-balance'>
    <h2 className=' text-center'>Welcome to our page!</h2>
      <p className='ml-9 mt-14'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit consectetur voluptas, rem deleniti amet dolor minima facilis explicabo veritatis fugiat fuga illo cumque sint expedita laboriosam vitae voluptatibus magnam!
        Dignissimos laborum eum totam, sit nihil quisquam doloribus beatae fugit? Placeat distinctio tempore aliquid numquam inventore. Totam praesentium ab suscipit, iure repellendus consequuntur ducimus tempora quibusdam. Ipsam, molestias quos? Fugit!
        Amet debitis laudantium ea libero fugit est blanditiis facere, esse hic doloribus vero, quo optio quod nihil consectetur vel reprehenderit nesciunt modi asperiores odio commodi in! Voluptas consequatur dolorum ipsa!
        Dolore doloremque enim porro ut dolorem quis sunt repellat, voluptates quasi architecto nihil inventore est, nulla assumenda soluta nemo facere. Temporibus porro architecto quidem nesciunt neque! Quae illo nisi consequatur.
      </p>
      <Image 
          src="/aipic2.jpg"
          alt="Code Image"
          width={500}
          height={300}
          className="mr-4 mt-16 mb-11 "
        />  
    </div></>
  )
}

export default Home
