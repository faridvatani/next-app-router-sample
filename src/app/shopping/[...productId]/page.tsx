//
// http://localhost:3000/shopping/1312/blue
//
import { FC } from "react";

interface pageProps {
  params: {
    productId: string;
  };
  searchParams: {
    search: string;
  };
}

const page: FC<pageProps> = ({ params, searchParams }) => {
  return (
    <>
      <div>
        Shopping Page - {params.productId} | {searchParams.search}
      </div>
    </>
  );
};

export default page;
