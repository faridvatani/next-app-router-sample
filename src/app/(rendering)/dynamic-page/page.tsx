// This is a Dynamic rendering page sample

import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET",
    cache: "no-cache", // Every time a user is requesting this page right here next.js knows that it should not cache the response
  });
  const data = await response.json();

  return <div>Dynamic Rendering Page - {JSON.stringify(data)}</div>;
};

export default page;
