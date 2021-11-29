import React from "react";
import styled from "styled-components";
import { Poster } from "./Poster";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const Grid = ({ url }) => {
  return (
    <GridContainer>
      <Poster url={url} />
      <Poster url={url} />
      <Poster url={url} />
      <Poster url={url} />
      <Poster url={url} />
    </GridContainer>
  );
};

//export default Grid;
