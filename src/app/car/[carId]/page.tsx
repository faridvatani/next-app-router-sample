import { Metadata } from "next";
import { FC } from "react";

interface pageProps {
  params: {
    carId: string;
  };
}

type car = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.carId}`
  );
  const data = (await res.json()) as car;
  return {
    title: data.title,
  };
}

const page: FC<pageProps> = async ({ params }) => {
  return (
    <>
      <div>Car Page - {params.carId}</div>
    </>
  );
};

export default page;
