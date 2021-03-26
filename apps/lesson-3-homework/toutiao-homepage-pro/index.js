function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; 
}

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

function load_single(data) {
    let feed_lst = document.getElementsByClassName("feed-list")[0];
    let div_add = document.createElement("div");
    let time_diff = compute_time_diff(data.behot_time * 1000);
    let cmt_cnt = compute_comment(data);
    div_add.innerHTML = `
        <div class="single-img-lbox">
            <a class="img-wrap" href="https://www.toutiao.com${data.source_url}" target="_blank">
                <img class="lazy-load-img" src=${data.image_url}>
            </a>
        </div>
        <div class="single-img-rbox">
            <div class="single-img-rbox-inner">
                <div class="title-box">
                    <a class="link" href="https://www.toutiao.com${data.source_url}" target="_blank">
                        ${data.title}
                    </a>
                </div>
                <div class="footer-bar">
                    <div class="footer-bar-left">
                        <a class="footer-bar-action media-avatar" href="https://www.toutiao.com${data.media_url}" target="_blank">
                            <img src="https:${data.media_avatar_url}">
                        </a>
                        <a class="footer-bar-action src" href="https://www.toutiao.com${data.media_url}" target="_blank">
                            &nbsp;
                            ${data.source}
                            &nbsp;
                        </a>
                        <a class="footer-bar-action src" href="#">
                            &nbsp;
                            ${cmt_cnt}
                            评论
                        </a>
                        <span class="footer-bar-action time">
                            &nbsp;&nbsp;
                            ${time_diff}
                        </span>
                    </div>
                    <div class="footer-bar-right"></div>
                </div>
            </div>
        </div>
    `
    div_add.className = "single-img";
    feed_lst.appendChild(div_add);
}

function load_no(data) {
    let feed_lst = document.getElementsByClassName("feed-list")[0];
    let div_add = document.createElement("div");
    let time_diff = compute_time_diff(data.behot_time * 1000);
    let cmt_cnt = compute_comment(data);
    div_add.innerHTML = `
        <div class="title-box">
            <a class="link" href="https://www.toutiao.com${data.source_url}" target="_blank">
                ${data.title}
            </a>
        </div>
        <div class="footer-bar">
            <div class="footer-bar-left">
                <a class="footer-bar-action media-avatar" href="https://www.toutiao.com${data.media_url}" target="_blank">
                    <img src="https:${data.media_avatar_url}">
                </a>
                <a class="footer-bar-action src" href="https://www.toutiao.com${data.media_url}" target="_blank">
                    &nbsp;
                    &nbsp;·
                    ${data.source}
                </a>
                <a class="footer-bar-action src" href="#">
                    &nbsp;
                    ${cmt_cnt}
                    评论
                </a>
                <span class="footer-bar-action time">
                    &nbsp;&nbsp;
                    ${time_diff}
                </span>
            </div>
            <div class="footer-bar-right"></div>
        </div>
    `;
    div_add.setAttribute("class", "no-img");
    feed_lst.appendChild(div_add);
}

function load(){
  const filename = "data.json";
  var request = new XMLHttpRequest();
  request.open("get", filename);
  request.send(null);
  request.onload = function() {
    if(request.status == 200){
      let json = JSON.parse(request.responseText)
      for (let i = 0; i < 5; ++i) {
          let id  = random(0, 26);
          if (json.data[i].single_mode == true) {
              load_single(json.data[id]);
          } else {
              load_no(json.data[id]);
          }
      }
      console.log("Load new information successfully!");
    }
  }
}

window.onscroll= function() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    
    if(clientHeight + scrollTop >= scrollHeight) {
        load();
    }
}