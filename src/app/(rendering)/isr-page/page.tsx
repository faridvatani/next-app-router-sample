// This is a Incremental Static Regeneration (ISR) page sample

import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET",
    next: {
      revalidate: 10, // Every 10 seconds next.js will try to revalidate this page
    },
  });
  const data = await response.json();

  return (
    <div>
      Incremental Static Regeneration (ISR) Page - {JSON.stringify(data)}
    </div>
  );
};

export default page;
