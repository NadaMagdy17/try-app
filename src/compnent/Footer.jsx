import React from "react";
import { FaDribbbleSquare,
         FaFacebookSquare,
         FaGithubSquare,
         FaInstagramSquare,
         FaTwitterSquare} from 'react-icons/fa'
const Footer =()=>{
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300 '>
            <div>
                <h1 className='text-[#00df9a] w-full text-3xl font-bold'>REACT. </h1>
                <p className='py-4 '>It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
             </div>

            <div className='lg:col-span-2 flex justify-between  '>
                <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analyitcs</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>

                </div>

           <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>ApI Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analyitcs</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>ApI Status</li>
                    </ul>
            </div>

            </div>
        </div>
    )
}
export default Footer