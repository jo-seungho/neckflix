import React from "react";
import styled from "styled-components";

const Nowloading = styled.marquee`
  width: 200px;
  font-size: 30px;
  color: gold;
`;

const Loadingdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93vh;
`;
// justify-content=수평정렬  align-items=수직정렬

export const Loading = () => {
  return (
    <Loadingdiv>
      <Nowloading>Loading...</Nowloading>
    </Loadingdiv>
  );
};
