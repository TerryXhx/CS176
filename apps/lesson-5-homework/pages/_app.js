import '../styles/globals.css'

import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";
import MainMid from "../components/MainMid";
import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar"

function compute_time_diff(timeStamp) {
    let now = new Date().getTime();
    let diff = now - timeStamp;
    let month = diff / (30 * 24 * 3600 * 1000);
    let week = diff / (7 * 224 * 3600 * 1000)
    let day = diff / (24 * 3600 * 1000);
    let hour = diff / (3600 * 1000);
    let min = diff / (60 * 1000);
    let time_diff = "";
    if (month >= 1) {
        time_diff = parseInt(month) + "月前";
    } else if (week >= 1) {
        time_diff = parseInt(week) + "周前";
    } else if (day >= 1) {
        time_diff = parseInt(day) + "日前";
    } else if (hour >= 1) {
        time_diff = parseInt(hour) + "小时前";
    } else if (min >= 1) {
        time_diff = parseInt(min) + "分钟前";
    } else time_diff = "刚刚";
    return time_diff;
}

function compute_comment(data) {
    let str_cnt = ""
    let cnt = 0;
    if (data.comments_count != null) {
        cnt = data.comments_count;
    } else {
        cnt = data.comment_count;
    }

    let ten_k = cnt / 10000;
    let k = cnt / 1000;
    let hundred = cnt / 100;

    if (ten_k >= 1) {
        str_cnt = parseInt(ten_k) + "万";
    } else if (k >= 1) {
        str_cnt = parseInt(k) + "千";
    } else if (hundred >= 1) {
        str_cnt = parseInt(hundred) + "百";
    } else str_cnt = cnt;

    return str_cnt;
}

function loadData(data) {
  switch (data.single_mode) {
    case false:
      let time_diff = compute_time_diff(data.behot_time * 1000);
      let cmt_cnt = compute_comment(data);
      return (
        <div className="no-img">
          <div className="title-box">
            <a
              className="link"
              href={"https://www.toutiao.com" + data.source_url}
              target="_blank"
            >
              {data.title}
            </a>
          </div>
          <div className="footer-bar">
            <div className="footer-bar-left">
              <a
                className="footer-bar-action media-avatar"
                href={"https://www.toutiao.com" + data.media_url}
                target="_blank"
              >
                <img src={"https:" + data.media_avatar_url}/>
              </a>
              <a
                className="footer-bar-action src"
                href={"https://www.toutiao.com" + data.media_avatar_url}
                target="_blank"
              >
                &nbsp; &nbsp;· {data.source}
              </a>
              <a className="footer-bar-action src" href="#">
                &nbsp; {cmt_cnt}
                评论
              </a>
              <span className="footer-bar-action time">
                &nbsp;&nbsp; {time_diff}
              </span>
            </div>
            <div className="footer-bar-right"></div>
          </div>
        </div>
      );
    case true:
        time_diff = compute_time_diff(data.behot_time * 1000);
        cmt_cnt = compute_comment(data);
        return (
          <div className="single-img">
            <div className="single-img-lbox">
              <a
                className="img-wrap"
                href={"https://www.toutiao.com" + data.source_url}
                target="_blank"
              >
                <img className="lazy-load-img" src={data.image_url} />
              </a>
            </div>
            <div className="single-img-rbox">
              <div className="single-img-rbox-inner">
                <div className="title-box">
                  <a
                    className="link"
                    href={"https://www.toutiao.com" + data.source_url}
                    target="_blank"
                  >
                    {data.title}
                  </a>
                </div>
                <div className="footer-bar">
                  <div className="footer-bar-left">
                    <a
                      className="footer-bar-action media-avatar"
                      href={"https://www.toutiao.com" + data.media_url}
                      target="_blank"
                    >
                      <img src={"https:" + data.media_avatar_url} />
                    </a>
                    <a
                      className="footer-bar-action src"
                      href={"https://www.toutiao.com" + data.media_url}
                      target="_blank"
                    >
                      &nbsp; {data.source}
                      &nbsp;
                    </a>
                    <a className="footer-bar-action src" href="#">
                      &nbsp; {cmt_cnt}
                      评论
                    </a>
                    <span className="footer-bar-action time">
                      &nbsp;&nbsp; {time_diff}
                    </span>
                  </div>
                  <div className="footer-bar-right"></div>
                </div>
              </div>
            </div>
          </div>
        );
  }
}

export default function MyApp() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
    <div>
      <TopBar />
      <div className="main-content">
        <MainLeft />
        <MainMid>
          {
            state.list.map((data) => {
              return loadData(data);
            })
          }
        </MainMid>
        <MainRight />
      </div>
    </div>
  );
};
