import React from "react";

const Newsletter =()=>{

    return(
        <div className='text-white w-full py-16 px-4'>
            <div className='flex flex-row max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-2'>
                   <h1 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                   <p className='md:text-xl sm:text-lg  font-bold py-2'>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className='my-4'>
                  <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter your email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 text-[#000300]'>Notify me</button>
                  </div>
                  <p >We care about the protection of your data,Read our
                      <a href='#' className='text-[#00df9a] un hover:underline'> Privacy Policy</a></p>
               </div>
            </div>
        </div>

    )
}
export default Newsletter;
