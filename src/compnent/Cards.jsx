import React from "react";
import single from '../assetss/single.png'
import double from '../assetss/double.png'
import triple from '../assetss/triple.png'
const Cards =()=>{
    return(
    <div className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8 '>Single User</h2>
                <p className='text-center font-bold text-4xl'> $149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] font-medium my-6 mx-auto px-6 py-3 rounded-md'>start Trial</button>
            </div>


            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 bg-gray-100 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8 '>PartnerShip</h2>
                <p className='text-center font-bold text-4xl'> $199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>1 TB Storage</p>
                    <p className='py-2 border-b mx-8  '>3 User Allowed</p>
                    <p className='py-2 border-b mx-8  '>Send up to 2 GB</p>
                </div>
                <button className='bg-[#000300] text-[#00df9a] w-[200px] font-medium my-6 mx-auto px-6 py-3 rounded-md'>start Trial</button>
            </div>


            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8 '>Group Account</h2>
                <p className='text-center font-bold text-4xl'> $299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8 '>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] font-medium my-6 mx-auto px-6 py-3 rounded-md'>start Trial</button>
            </div>
        </div>



    </div>
    )

}
export default Cards;