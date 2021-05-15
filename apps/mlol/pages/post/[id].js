import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";

import Article from "../../components/Article/Article";

export default function Home({ articlesData }) {
  const router = useRouter();
  const { id } = router.query;
  const datum = articlesData[id];

  return (
    <div>
      <Container>
        <Article data={datum} />
      </Container>
    </div>
  );
}


export const getServerSideProps = async () => {
  let res = await fetch(`http://localhost:3000/api/article`)
  let data = await res.json()

  return { 
      props: { articlesData: data.data }
  }
}