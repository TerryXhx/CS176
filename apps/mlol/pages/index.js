import { useState, useEffect } from 'react';

import AppBar from '../components/AppBar';
import  ScrollableTabsButtonAuto from '../components/Tabs';
import ActiveCarousel from '../components/Carousel';
import BottomBar from '../components/BottomBar';
import Card from '../components/Card/Card';
import { Container } from "@material-ui/core";

export default function Home({ feedsData }) {
  // const [feedsData, setFeedsData] = useState({
  //   list: [],
  // });

  // useEffect(() => {
  //   fetch("/api/feed").then(async (res) => {
  //     const resp = await res.json();
  //     setFeedsData({
  //       list: resp.data,
  //     });
  //   });
  // }, []);

  return (
    <div>
      <AppBar />
      <ScrollableTabsButtonAuto />
      {/* <ActiveCarousel /> */}
      <Container>
        {/* {feedsData.list.map((feedData) => {
          return <Card data={feedData} />;
        })} */}
        {feedsData.map((feedData) => {
          return <Card data={feedData} />;
        })}
      </Container>
      <BottomBar />
    </div>
  )
}

export const getServerSideProps = async () => {
  let res = await fetch(`http://localhost:3000/api/feed`)
  let data = await res.json()

  return { 
      props: { feedsData: data.data }
  }
}