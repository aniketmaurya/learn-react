import { useState } from 'react'

function App() {
  const [color, setColor] = useState("purple")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center
         shadow-lg gap-3 bg-white rounded-3xl px-3 py-2'>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Purple</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>



        </div>
      </div>
    </div>
  )
}

export default App

