// This is a sever component sample
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  console.log("Sever Component Rendered");
  return <div>Login Page</div>;
};

export default page;
