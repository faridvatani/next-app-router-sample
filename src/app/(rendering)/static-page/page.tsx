// This is a static rendering page sample
// static beacuse uses no initial props (rendred at build time as static html)
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div>Static Rendering Page</div>;
};

export default page;
