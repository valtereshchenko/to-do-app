import React from "react";
import "./Container.css";
import "../App.css";

type ContainerProps = {
  styles: React.CSSProperties;
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  return (
    <div className="App-header">
      <div style={props.styles}>{props.children}</div>
    </div>
  );
};
