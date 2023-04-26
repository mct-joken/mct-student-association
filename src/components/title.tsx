import React from "react";

export function Title(props: { title: string }) {
  return (
    <div className="title">
      <h2 style={{
        borderBottom: "1px solid #000",
        width: "100%",
        maxWidth: "1600px",
      }}>{props.title}</h2>
    </div>
  );
}
