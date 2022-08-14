import type { ReactNode } from "react";
import { Fragment } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

type LayoutProps = {
  children: ReactNode;
};
const primaryLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Fragment> {children} </Fragment>
      <Footer />
    </>
  );
};

export default primaryLayout;
