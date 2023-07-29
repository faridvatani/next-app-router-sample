import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET",
  });
  const data = await response.json();

  return (
    <>
      <div>Profile Page</div>
      <h2>{JSON.stringify(data)}</h2>
    </>
  );
};

export default page;
