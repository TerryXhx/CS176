function TopBar() {
    return (
        <div className="top-bar">
            <div className="header-left">
                <a className="download-app-link" href="https://app.toutiao.com/news_article/">下载APP</a>
                <a className="register-account-link" href="https://mp.toutiao.com/auth/page/login/?redirect_url=JTJG">注册头条号</a>
                <div className="weather-info">
                    <span className="city">上海</span>
                    <span className="city-state">阴</span>
                    <span className="city-temporature">9 ℃ / 13 ℃</span>
                </div>
            </div>
            <div className="header-right">
                <a className="infringement-complaints-link" href="https://mp.toutiao.com/profile_v3_public/public/complains/">侵权投诉</a>
                <a className="more" href="https://www.toutiao.com/about/G">头条产品</a>
            </div>
        </div>
    );
}

export default TopBar;