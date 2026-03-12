import React, { useState } from 'react';
const App = () => {
  // const btnClicked = () =>  {
  //   alert('Im Clicked')
  // }

  // const [text, setText] = useState('New Text');
  // const changeText = () => {
  //   setText('Text has changed')
  // };

  // const changeText = (elem) =>{
  //   console.log(elem.target.value)
  // }



  return (
    <>
    {/* <h1 className='text-7xl text-red-900 underline'>{text}</h1> */}
    {/* <button onClick={changeText} className='m-5 text-lg bg-gray-900 text-white shadow-sm outline-0 rounded-md px-4 py-1.5  focus:ring-offset-2 ring-2 hover:bg-gray-800 focus:ring-gray-500'>Click To Change Text</button> */}

    {/* <button  className='m-5 text-lg bg-gray-900 text-white shadow-sm outline-0 rounded-md px-4 py-1.5  focus:ring-offset-2 ring-2 hover:bg-gray-800 focus:ring-gray-500'>Click To Change Text</button> */}
    
    {/* <input onChange={changeText} className='m-5 px-2 focus:outline-blue-900 rounded-sm py-2 outline-2 outline-gray-300 w-2xl' type="text" name="text" id="text" /> */}
    
    <div onMouseEnter={(e) => {
      console.log(e)
    }} className='bg-zinc-100 w-2xl h-100 border-slate-500 border-8'></div>
    </>
  )
}

export default App