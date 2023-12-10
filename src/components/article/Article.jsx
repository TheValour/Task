import React from 'react'
import Detail from './Detail'
import { article } from './data'
import './Article.css'

export default function Article() {
    const art = article.data.map((data, index) => {
        return <Detail key={index} data={data}/>;
    });

  return (
    <div className='w-screen flex flex-col justify-center px-8'>
        <div id='filter-section' className='flex justify-between ml-40 mr-28 my-3 border-b py-4'>
            <div className=''>
                <span className='mr-3'>All Post(32)</span>
                <span className='mr-3 option-hide'>Article</span>
                <span className='mr-3 option-hide'>Education</span>
                <span className='mr-3 option-hide'>Events</span>
            </div>
                
            <div>
                <button className='bg-gray-200 p-1 text-sm mr-3'>Write a Post</button>
                <button id='btn-join' className='bg-blue-400 text-white p-1 text-sm'>Join Group</button>
            </div>
        </div>

        <div className='w-screen flex justify-center px-8'>
            <div id='post-section' className='w-6/12 flex flex-col justify-center items-center'>
                {art}               {/* Detail pages */}
            </div>
            
            <div id='side-section' className='w-3/12 my-3 ml-10'>
                <input type="text" name="" id="" placeholder='Noida, India' 
                    className='placeholder:text-black  border-b border-gray-300'/>
                
                <div className='text-gray-400 mt-4 text-xs'>
                    Your location will help us serve better and extend a personalised experience.
                </div>
            </div>
        </div>
    </div>
  )
}
