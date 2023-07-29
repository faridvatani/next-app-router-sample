import { AuthRequiredError } from "@/lib/exceptions";
import { FC } from "react";

interface pageProps {}
const session = null;

const page: FC<pageProps> = ({}) => {
  if (!session) {
    throw new AuthRequiredError;
  }
  return (
    <>
      <div>Dashboard Page</div>
      <div>This is an auth-only page</div>
    </>
  );
};

export default page;
