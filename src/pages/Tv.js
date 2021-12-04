import { tvApi } from "../api";
import { useState, useEffect } from "react";
import { Grid } from "../components/Grid";

const Tv = () => {
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [toprated, setToprated] = useState([]);
  useEffect(async () => {
    let populars = await tvApi.popular();
    let airingTodays = await tvApi.airingToday();
    let topRateds = await tvApi.topRated();
    setPopular(populars);
    setAiringToday(airingTodays);
    setToprated(topRateds);
  }, []);

  return (
    <>
      <Grid data={popular} title="Popular"></Grid>
      <Grid data={airingToday} title="Now Airing Today"></Grid>
      <Grid data={toprated} title="Top Rated"></Grid>
    </>
  );
};

export default Tv;
