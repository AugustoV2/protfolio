import React from 'react'

const dem = () => {
    return (
        <div className='bg-black '>
            <div className='   flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 '>
                <div className='"w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700 '>
                    <div className='p-6  space-y-4 md:space-y-6 sm:p-8r'>
                        <div className='flex flex-col items-center'>
                        <label htmlFor="">Email</label>
                        <input type="mailif" id='email' name='email' className='rounded-lg bg-gray-900' placeholder='soman@gial.com' required />
                        </div>
                        <div className='flex flex-col items-center'>
                        <label htmlFor="">password</label>
                        <input type="mailif" id='email' name='email' className='rounded-lg bg-gray-900' placeholder='soman@gial.com' required />
                        </div>
                        
                      
                    </div>
                </div>


            </div>


        </div>
    )
}

export default dem
