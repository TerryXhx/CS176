import { useEffect } from 'react';

function MainLeft() {
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0;
    //         let left = document.getElementsByclassName("main-left")[0];
    //         if (scrollTop >= 50) {
    //             left.setAttribute("className", "main-left-fix");
    //         }
    //     });
    // }, []);

    return (
        <div className="main-left">
            <div className="channel">
                <a className="logo" href="/">
                    <img src="https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/toutiao_logo.png" alt="今日头条" />
                </a>
                <ul>
                    <li>
                        <a className="item active" href="https://www.toutiao.com/" target="_self">推荐</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.ixigua.com/?wid_try=1" target="_blank">西瓜视频</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/news_hot/" target="_blank">热点</a>
                    </li>
                    <li>
                        <a className="item" href="https://live.ixigua.com/" target="_blank">直播</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/news_image/" target="_blank">图片</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/news_tech/" target="_blank">科技</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/news_entertainment/" target="_blank">娱乐</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/news_game/" target="_blank">游戏</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/news_sports/" target="_blank">体育</a>
                    </li>
                    <li>
                        <a className="item"href="https://www.dongchedi.com/?zt=tt_pc_home_channel" target="_blank">懂车帝</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/news_finance/" target="_blank">财经</a>
                    </li>
                    <li>
                        <a className="item" href="https://www.toutiao.com/ch/digital/" target="_blank">数码</a>
                    </li>
                    <li>
                        <a className="item" href="#">更多</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainLeft;