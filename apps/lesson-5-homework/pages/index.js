import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import MyApp from "./_app";

export default function Home() {
  return (
    <div className={styles.container}>
      <MyApp />
    </div>
  );
}