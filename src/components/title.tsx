import React from "react";

export function Title(props: { title: string }) {
  return (
    <div className="title">
      <h2 style={{
        marginTop: "2rem",
        borderBottom: "1px solid #000",
        width: "100%",
        fontWeight: "normal",
        maxWidth: "1600px",
      }}>{props.title}</h2>
    </div>
  );
}
