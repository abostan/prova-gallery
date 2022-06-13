import React, { useEffect } from "react";
import Header from "./Header";

export const Page = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Header {...props} />
      {props.children}
    </div>
  );
};

export default Page;
