import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Carousel from './Carousel';


const images = [
    "https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/img-1.png",
    "https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/img-2.jpg",
    "https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/img-3.png",
    "https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/img-4.png",
    "https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/24.png"
];

ReactDOM.render(
  <React.StrictMode>
    <Carousel>
        <img src={images[0]} alt="img-1"></img>
        <img src={images[1]} alt="img-2"></img>
        <img src={images[2]} alt="img-3"></img>
        <img src={images[3]} alt="img-4"></img>
        <img src={images[4]} alt="img-5"></img>
    </Carousel>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();