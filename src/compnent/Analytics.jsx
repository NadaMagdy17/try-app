import React from 'react';
import laptop from '../assetss/laptop.jpg'
const Analytics =()=>{

    return(
        <div className='w-full bg-white py-16 px-4 '>
            <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 ' src={laptop} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase font-bold text-[#00df9a]'>data analytic dashboard</p>
                    <h1 className='capitalize font-bold md:text-2xl sm:text-3xl text-xl py-2'>manage analytics centerally</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries. </p>
                    <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto text-[#00df9a] md:mx-0 py-3'> Get Started</button>
                </div>
            </div>



        </div>


    )
}

export default Analytics;