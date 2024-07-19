import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = React.useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/RandimaD25")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-orange-600 text-center font-bold py-6 text-[2rem] mx-[15rem] rounded-xl my-[3rem]">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} className="w-[10rem] mx-[3rem]" alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/RandimaD25");
  return response.json();
};
