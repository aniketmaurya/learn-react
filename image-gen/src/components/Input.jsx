import React from 'react'

export default function WithButtonInput() {
  return (
    <div className="flex w-full items-center space-x-2 md:w-1/3">
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
