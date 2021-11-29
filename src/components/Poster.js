import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  width: 200px;
  height: 250px;
  background-size: cover;
  border-radius: 5px;
`;
// styled.img``

export const Poster = ({ url }) => {
  //   console.log(url);
  return <Div url={url}>"Poster"</Div>;
};
