// import { FC } from "react";

// interface pageProps {
//   params: {
//     postId: string;
//   };
// }

// const page: FC<pageProps> = ({ params }) => {
//   return (
//     <>
//       <div>Post Page - {params.postId}</div>
//     </>
//   );
// };

// export default page;

// -----------------------------------------------------------------

// import { FC } from "react";

// interface pageProps {
//   params: {
//     postId: string;
//   };
// }

// const page = async ({ params }: pageProps) => {

//   // DB fetching

//   return (
//     <>
//       <div>Post Page - {params.postId}</div>
//     </>
//   );
// };

// export default page;

// -----------------------------------------------------------------

//
// http://localhost:3000/post/1?search=hello
//
import { FC } from "react";

interface pageProps {
  params: {
    postId: string;
  };
  searchParams: {
    search: string;
  };
}

const page: FC<pageProps> = ({ params, searchParams }) => {
  return (
    <>
      <div>
        Post Page - {params.postId} | {searchParams.search}
      </div>
    </>
  );
};

export default page;
