import { useState, useEffect } from 'react';

import AppBar from '../components/AppBar';
import  ScrollableTabsButtonAuto from '../components/Tabs';
import SimpleCarousel from '../components/Carousel';
import BottomBar from '../components/BottomBar';
import Card from '../components/Card/Card';
import { Container } from "@material-ui/core";

export default function Home({ feedsData }) {
  return (
    <div>
      <AppBar />
      <ScrollableTabsButtonAuto />
      <SimpleCarousel />
      <Container>
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