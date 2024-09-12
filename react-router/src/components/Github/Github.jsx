import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
//   const [data, setData] = useState([]);

//     useEffect(() => {
//         githubInfoLoader();
//     }, []);

//     const githubInfoLoader = async () => {

//     await fetch("https://api.github.com/users/aniketmaurya")
//       .then((response) => response.json())
//       .then((data) => {
//           console.log(data);
//         setData(data);
//       });
//   };
    const data = useLoaderData();

  return (
    <div className="flex flex-col items-center bg-gray-600">
      <h1 className="text-3xl text-white font-bold mb-4 self-center my-4">
        Github
      </h1>
      <div className="flex flex-row items-center justify-start">
        <div className="flex justify-start">
          <img
            className="rounded-full border-2 border-gray-300 m-4"
            src={data.avatar_url} width={300}
          ></img>
        </div>
        <h2 className="text-4xl text-white text-center mb-4 my-4">Followers: {data.followers}</h2>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {

    const data = await fetch("https://api.github.com/users/aniketmaurya")
    return data.json();
  };
