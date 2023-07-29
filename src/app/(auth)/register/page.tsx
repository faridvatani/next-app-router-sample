// For client-side rendering specifically saying "use client" in the top of component
// then this component is going to be run on the server and then shipped back to the client.
"use client";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  console.log("Client Component Rendered");

  return <div>Register Page</div>;
};

export default page;
