import React from "react";

const Type = {
  Title: "title",
};

export default function Typography({ type, children }) {
  return <>{type === Type.Title ? <h1>{children}</h1> : <p>{children}</p>}</>;
}
