import React from "react";
import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const { path } = useParams();

  return <div>{path}</div>;
};

export default SingleCategory;
