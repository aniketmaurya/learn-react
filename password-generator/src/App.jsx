import { useEffect } from 'react'
import { useState, useCallback } from 'react'

function App() {

  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => passwordGenerator(), [length, charAllowed, numberAllowed, setPassword])


  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
     my-8 text-orange-500 bg-gray-700'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg mb-4 px-4 py-3'>
        <input className='outline-none px-3 py-2 w-full' value={password} readOnly type='text' placeholder='password'></input>
        <button className='bg-blue-700 px-3 py-0.5 text-white shrink-0'
        onClick={() => window.navigator.clipboard.writeText(password)}>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer' value={length} max="20" min="6" type='range'
            onChange={(e) => setLength(e.target.value)}></input>
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}></input>
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} onChange={() => {
            setCharAllowed((prev) => !prev);
          }}></input>
          <label>Character</label>
        </div>


      </div>

    </div>

  )
}

export default App
