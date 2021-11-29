import { useState, useEffect } from "react";
import { movieApi } from "../api";
import { Grid } from "../components/Grid";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowplaying, setPlaying] = useState([]);
  const [toprated, setToprated] = useState([]);
  useEffect(async () => {
    let populars = await movieApi.popular();
    let upcomings = await movieApi.upComming();
    let nowPlayings = await movieApi.nowPlaying();
    let topRateds = await movieApi.topRated();
    setPopular(populars);
    setUpcoming(upcomings);
    setPlaying(nowPlayings);
    setToprated(topRateds);
  }, []);

  return (
    <>
      <Grid url={popular}></Grid>
      <Grid url={upcoming}></Grid>
      <Grid url={nowplaying}></Grid>
      <Grid url={toprated}></Grid>
    </>
  );
};

export default Home;
