import { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return <div className=''>{children}</div>;
};

export default layout;
