import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className="flex-grow flex flex-col relative">
      <NavBar/>
      {props.children}
    </div>
  );
}
