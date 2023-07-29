// asynchronous server component  by using https://jsonplaceholder.typicode.com/posts/1
import { FC } from "react";

interface pageProps {}

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const page: FC<pageProps> = async ({}) => {
  await wait(5000);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET",
  });
  const data = await response.json();

  return (
    <>
      <div>course Page</div>
      <h2>{data.body}</h2>
    </>
  );
};

export default page;
