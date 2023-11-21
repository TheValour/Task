import React, { useState, useEffect } from 'react';

const ApiDataComponent = () => {
  const [data, setData] = useState(null);
  const apiUrl = 'https://randomuser.me/api/?page=1&results=1&seed=abc';    // API endpoint

  useEffect(() => {
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(apiData => setData(apiData.results[0])) 
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

    useEffect(() =>{
        console.log(data)
    }, [data])
  return (
    <div className='flex flex-col w-3/6 h-5/6 bg-white'>
      <h2 className='mb-8'>API Data</h2>
      {data ? (

        <div className='flex border p-8 bg-white'>
            <img src={data.picture.large} alt=""  className='mr-5 bg-gray-300 border p-6'/>
            <div className=''>
                <div className='text-xl font-bold'>{data.name.title} {data.name.first} {data.name.last}</div> 
                <div className='text-gray-600'><span className='text-sky-500'>Gender :</span> {data.gender}</div>
                <div className='text-gray-600'><span className='text-sky-500'>Phone :</span> {data.phone}</div>
                <div className='text-gray-600'><span className='text-sky-500'>Email : </span>{data.email}</div>
            </div>
        </div>

      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ApiDataComponent;
