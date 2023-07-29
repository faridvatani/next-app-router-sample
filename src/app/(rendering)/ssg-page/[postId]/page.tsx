// This is a SSG rendering page sample
// automatically generated as static HTML and Json
import { FC } from "react";

export async function generateStaticParams() {
  const posts = ["post-one", "post-two"];

  return posts.map((post) => {
    return {
      postId: post,
    };
  });
}

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return <div>SSG Rendering Page</div>;
};

export default page;
