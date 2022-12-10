import React, { FC } from "react";
import "./Layout.modules.css";

interface ChildrenProps {
  children: React.ReactNode;
}
const Layout: FC<ChildrenProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
