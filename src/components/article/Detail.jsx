import React from 'react'

export default function Detail({data}) {
  return (
    <div className='detail-page w-full items-center bg-slate-100 border border-slate-300 my-3'>
        {data.bgImg && <img src={data.bgImg} alt="img" className='w-full'/>}
        <div className='p-3'>
            <h2>{data.title}</h2>
            <h2 className='font-bold'>{data.heading}</h2>
            
            {data.subheading &&
                <>
                    <span className='text-gray-600 mr-10 text-xs font-bold'>{data.subheading.h1}</span>
                    <span className='text-gray-600 text-xs font-bold'>{data.subheading.h2}</span>
                </>
            }

            {data.link ? 
                <button className='border-2 p-1 border-green-500 rounded-1 text-green-500 w-full'>{data.link.title}</button>
                :<span className='text-gray-600'>I've worked in UX for the better part of a decade. From now on, I plan to rei…</span>
            }

            <footer className='my-5 flex items-center justify-between w-full'>
                <div className='flex  items-center'>
                    <img src={data.userImg} alt="" />
                    <h2 className='ml-3'>{data.user}</h2>
                </div>
                <div className='flex items-center'>
                    <img src="./img/eye.png" alt="" className='h-4 mr-2'/>
                    <span>{data.views}k views</span>
                    <img src="./img/share.png" alt="" className='ml-5'/>
                </div>
            </footer>
        </div>
    </div>
  )
}
