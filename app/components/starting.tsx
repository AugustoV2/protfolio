'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Know from './know'

const main = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 ml-20 mt-20' >
        <div className='col-span-7 '>
          <div className='ml-0 mx-auto '>
            <h1 className=' mb-10 mt-10 lg:text-6xl font-extrabold  bg-gradient-to-r from-indigo-400 to-red-600 inline-block text-transparent bg-clip-text'>
            Hello, I&apos;m
            </h1>
            <h2>
              <TypeAnimation
                sequence={[

                  'Augusto Varghese',
                  2000,

                  'Human',
                  1000,
                  'friewnd',
                  1000,
                  'software eng',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              /></h2>

          </div>


          <p className='mb-8 text-gray-500'>
            fellow being nce to meet you gois hi
          </p>

        </div>

        <div className='col-span-5 mt-200'>

          <div className='rounded-full bg-gray-500 w-60 h-70 relative '>
            <img
              src="https://envs.sh/iB1.png"
              alt="nothng"
              width={300}
              height={300} />
          </div>
        </div>
        <div className='ml-100 mt-10'>
          <button className='px-10 py-3 rounded-full bg-white text-black'>KnowMe</button>
        </div>
        <div className='ml-100 mt-10'>
          <button
            onClick={Know}
            className='px-10  py-3 rounded-full ml-20 bg-white text-black'
            type='button'
          >

            DownladCV
          </button>
        </div>

      </div>
    </section>

  )
}

export default main
