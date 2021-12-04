import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Poster } from "./Poster";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ThisLink = styled(Link)`
  cursor: pointer;
`;

export const Grid = ({ data, title }) => {
  // console.log(data);
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Title>{title}</Title>
      <GridContainer>
        {data.map((datum) => {
          return (
            <ThisLink
              key={datum.id}
              // to={
              //   pathname !== "/tv"
              //     ? `/movie/${datum.id}`
              //     : `${pathname}/${datum.id}`
              // }
              to={`${datum.id}`}
            >
              <Poster
                key={datum.id}
                id={datum.id}
                poster_path={datum.poster_path}
              />
            </ThisLink>
          );
        })}
      </GridContainer>
    </>
  );
};

//export default Grid;
/// 청소기
