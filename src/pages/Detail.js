import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { movieApi, tvApi } from "../api";
import { Grid } from "../components/Grid";
import { Poster } from "../components/Poster";

const Container = styled.div``;
const ImgPoster = styled.img``;

const Detail = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const params = useParams();
  const check = location.pathname.indexOf("movie");

  useEffect(() => {
    async function fetchData() {
      if (check === 1) {
        setData(await movieApi.detail(params.id));
      } else {
        setData(await tvApi.detail(params.id));
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <ImgPoster></ImgPoster>
    </Container>
  );
};
// 포스터 눌렀을때 링크 가능하게 구현이 목표

export default Detail;
