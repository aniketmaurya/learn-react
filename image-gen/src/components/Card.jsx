import React from 'react'


function WithButtonInput() {
    return (
      <div className="flex w-full items-center space-x-2 md:w-full">
        <input
          className="flex h-10 w-full rounded-md border border-gray/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="Text"
          placeholder="Text prompt"
        ></input>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Generate
        </button>
      </div>
    )
  }
  

export default function Card() {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        {/* <h1 className="text-lg font-semibold">About Macbook</h1> */}
        <WithButtonInput />
      </div>
    </div>
  )
}