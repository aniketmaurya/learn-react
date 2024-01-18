import React, { useState } from 'react';

function Input({ onGenerateClick }) {
  const [inputText, setInputText] = useState('Cats in hats');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGenerateClick = () => {
    onGenerateClick(inputText);
  };

  return (
    <div className="flex w-full items-center space-x-2 md:w-full">
      <input
        id="promptInput"
        className="flex h-10 w-full rounded-md border border-gray/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"  // Fixed the type from "Text" to "text"
        placeholder="Text prompt"
        value={inputText}
        onChange={handleInputChange}
      ></input>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={handleGenerateClick}
      >
        Generate
      </button>
    </div>
  );
}


export default function Card() {
  const [imageSrc, setImageSrc] = useState(
    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
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

  const handleGenerateClick = (inputText) => {
    // You can use the input text to generate a new image source
    // For now, let's just append it to the original URL
    // TODO: Integrate SDXL Turbo here and update newImageSrc to the generated image.
    postRequest(inputText)
    // console.log(newImageSrc);
    // setImageSrc(newImageSrc);
  };

  return (
    <div className="w-1/2 rounded-md border">
      <img
        src={imageSrc}
        alt="Generated Image"
        className="h-full w-full rounded-md object-cover"
      />
      <div className="p-4">
        {/* <h1 className="text-lg font-semibold">About Macbook</h1> */}
        <Input onGenerateClick={handleGenerateClick} />
      </div>
    </div>
  );
}
