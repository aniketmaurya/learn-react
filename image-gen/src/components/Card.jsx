import React, { useState } from 'react';
import sampleImageSrc from '../assets/sdxl-turbo.jpeg';

function Input({ onGenerateClick }) {
  const [inputText, setInputText] = useState('Dog in hat, puppy eyes, frosty background, full of lights, mountain, 4K');


  return (
    <div className="flex w-full items-center m-1 space-x-1 md:w-full">
      <input
        id="promptInput"
        className="flex h-10 w-10/12 rounded-md border border-gray/40 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"  // Fixed the type from "Text" to "text"
        placeholder="Text prompt"
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
      ></input>
      <button
        type="button"
        className="rounded-md w-fit bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => onGenerateClick(inputText)}
      >
        Generate
      </button>
    </div>
  );
}


export default function Card() {
  const [imageSrc, setImageSrc] = useState(
    sampleImageSrc
  );

  const postRequest = async (newPrompt) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          // Your request payload goes here
          prompt: newPrompt,
          negative_prompt: 'ugly, blurry, poor quality',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Assuming the response is an image, convert it to a data URL
      const responseDataUrl = await response.blob().then((blob) =>
        URL.createObjectURL(blob)
      );

      setImageSrc(responseDataUrl);
      return responseDataUrl
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  }

  return (
    <div className="w-auto rounded-md border">
      <img
        src={imageSrc}
        alt="Generated Image"
        className="h-full w-full rounded-md object-cover"
      />
        <Input onGenerateClick={(inputText) => postRequest(inputText)} />
    </div>
  );
}
