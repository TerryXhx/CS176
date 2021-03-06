function MainRight() {
    return (
        <div className="main-right">
            <div className="search-wrapper">
                <input className="search-input" placeholder="搜索站内资讯、视频或用户" />
                <div className="search-button">
                    <button type="button">搜索</button>
                </div>
            </div>
            <div className="login-wrapper">
                <div className="login inner">
                    <p className="login-message">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
                    <a href="https://sso.toutiao.com/">
                        <button type="button" className="login-button">登录</button>
                    </a>
                    <ul className="third-login">
                        <li className="sns qq">
                            <img src="http://sf3-scmcdn-tos.pstatp.com/obj/goofy/toutiao/toutiao_web_pc/svgs/icon_qq_pc.83d80076.svg" />
                            <span>QQ</span>
                        </li>
                        <li className="sns weixin">
                            <img src="http://sf3-scmcdn-tos.pstatp.com/obj/goofy/toutiao/toutiao_web_pc/svgs/icon_weixin_pc.7eab8c3d.svg" />
                            <span>微信</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pane-module">
                <div className="module-head">更多</div>
                <ul className="links-wrapper">
                    <li className="link-item"><a href="#">关于头条</a></li>
					<li className="link-item"><a href="#">加入头条</a></li>
					<li className="link-item"><a href="#">媒体报道</a></li>
					<li className="link-item"><a href="#">媒体合作</a></li>
					<li className="link-item"><a href="#">产品合作</a></li>
					<li className="link-item"><a href="#">合作说明</a></li>
					<li className="link-item"><a href="#">广告投放</a></li>
					<li className="link-item"><a href="#">联系我们</a></li>
					<li className="link-item"><a href="#">用户协议</a></li>
					<li className="link-item"><a href="#">隐私政策</a></li>
					<li className="link-item"><a href="#">侵权投诉</a></li>
					<li className="link-item"><a href="#">廉洁举报</a></li>
					<li className="link-item"><a href="#">企业认证</a></li>
					<li className="link-item"><a href="#">肺炎求助</a></li>
					<li className="link-item"><a href="#">辟谣专区</a></li>
                </ul>
            </div>
            <div className="pane-module">
                <div className="module-head">友情链接</div>
                <ul className="links-wrapper">
                    <li className="link-item"><a href="#">光明网</a></li>
					<li className="link-item"><a href="#">央广网</a></li>
					<li className="link-item"><a href="#">国际在线</a></li>
					<li className="link-item"><a href="#">中国西藏网</a></li>
					<li className="link-item"><a href="#">参考消息</a></li>
					<li className="link-item"><a href="#">环球网</a></li>
					<li className="link-item"><a href="#">中青在线</a></li>
					<li className="link-item"><a href="#">中青网</a></li>
					<li className="link-item"><a href="#">中工网</a></li>
					<li className="link-item"><a href="#">海外网</a></li>
					<li className="link-item"><a href="#">中国网</a></li>
					<li className="link-item"><a href="#">未来网</a></li>
					<li className="link-item"><a href="#">千龙网</a></li>
					<li className="link-item"><a href="#">新京报</a></li>
					<li className="link-item"><a href="#">北青网</a></li>
					<li className="link-item"><a href="#">法制晚报</a></li>
					<li className="link-item"><a href="#">北京晨报</a></li>
					<li className="link-item"><a href="#">北京商报</a></li>
					<li className="link-item"><a href="#">北京娱乐信报</a></li>
					<li className="link-item"><a href="#">奥一网</a></li>
					<li className="link-item"><a href="#">金羊网</a></li>
					<li className="link-item"><a href="#">华商网</a></li>
					<li className="link-item"><a href="#">新民网</a></li>
					<li className="link-item"><a href="#">红网</a></li>
					<li className="link-item"><a href="#">中国江苏网</a></li>
					<li className="link-item"><a href="#">中国江西网</a></li>
					<li className="link-item"><a href="#">齐鲁网</a></li>
					<li className="link-item"><a href="#">南海网</a></li>
					<li className="link-item"><a href="#">...</a></li>
                </ul>
            </div>
            <div className="company-wrapper">
                <p className="company-name">
                    © 
                    2021
                    今日头条
                </p>
                <p>
                    <a href="http://www.shdf.gov.cn/shdf/channels/740.html" target="_blank">
                        <img src="data:image/jpeg;base64,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" />
                        &nbsp;扫黄打非网上举报
                    </a>
                </p>
                <p>
                    <a href="http://www.piyao.org.cn/yybgt/index.htm" target="_blank">网络谣言曝光台</a>
                </p>
                <a href="https://www.12377.cn/" target="_blank">中国互联网举报中心</a>
                <a href="https://tsm.miit.gov.cn/dxxzsp/" target="_blank">&nbsp;京ICP证140141号</a>
                <div>
                    <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备12025439号-3</a>
                    <a href="https://www.toutiao.com/license/" className="icp" target="_blank">&nbsp;网络文化经营许可证</a>
                </div>
                <a href="https://www.toutiao.com/business_license/" target="_blank">营业执照</a>
                <p>京-非经营性-2016-0081</p>
                <p>互联网药品信息服务资格证书</p>
                <p>
                    <a href="https://www.toutiao.com/a3642705768/" target="_blank">跟帖评论自律管理承诺书</a>
                </p>
                <span>违法和不良信息举报：400-140-2108</span><span>举报邮箱：jubao@toutiao.com</span><span>公司名称：北京字节跳动科技有限公司</span>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002023" target="_blank">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABvFBMVEVHcEz25qTk0JXnxWXs04vktmTlzXP89t337Lr+/OD69M3eqFf53I316pzu46vu3H/Yrn3owH7UrFrftWjx166xkHz7x2fcrGrgvovz6ZLcp1nkvFnTk3DZr4LKhFvDfz7jrFPnvGzbnFHoxnz/+dDqw3r/74bktoCaaVyfaFXRrnbqvlkABHjVHhjWPCEFAWQBAW3qxmDmv1HvzGPw1nHkslTuy2zdm0T/1FXWAgjNAALcSSbWZDTquVDuyVnmuFjfo0rrsEnluF3VkkPdkkbUh0D8xVS5kVp2eX//3WDklTjUxXVreYnrXyPtgjvqcDLEun+Ujn3143PpwWDjrVPTLhw5FDjVdC/yoEHjrUqTeFpRNlHdhTXDEgpZVnPJJxNkEUPREg7MPSfYVi7URCj9LA/acTi7ABA8H0h7ipcAEpBzY2EZN5D2qjy7TCYAAID9vUbuvlDWjjzzfCjYnlj8jizXkVOsonP/723twmKTYDa0o2aptJHJWSr/vmBODk6NhnfFUiReWWbGPh1MADmxDg770m//0maBWDqEaUrEazOeXzCjfVKnjVm1gD/TvIfFrnz8zGSjmYTOeDoOTxX1AAAAK3RSTlMAKgLukeT5HEEIW8a2PIDnrMb6/GnOwuCcq+v0FEhdnOS80vtM5r6x+/dvgk6cRwAAAWVJREFUGNNjYIAAdhFRURF2BmTAIaDZ3dHZoyGgghDjdA+r6vL1Fy4Pc+eEibGLRUcVW+pZW0XURPNARRmFM5pKdXVDrRNj63wyVBnBgryB+b2+lqG6iXpWvgEGDYwQzYE6fdaWunp6ulZ63gYeaiA3aOVOynf3s6p1NnJJ9Pc2CLTgAwpKeE3Iyi7Ia7ZJS3P1zNYJyJUACorHmOUY5PmlJNmk+Nvo55h4iQMFhSYXZOqkp9o0hvulphv4uLmyAgXVzSf2Z7W0xsbHWycl6AS0mbIABQVdQtozdfT16xP09XU8PJ0iBYGCyiVlXmbeUT7VQnFxHpUR5pH8QEEuIwfncDdPCzdHiwqLGGdTOw6Q67mYjVyLjLVNtY1NzF3MmDkg4cZqaGivbRhsrO1gbxIsxQsW5AkycTLVDgm2NXewdzILkoSEJou0rV2ho62jtp2RIT8fEzRAZeTkuZUUWLkVWWTBQgDxBU8MyWNkzgAAAABJRU5ErkJggg==" />
                    &nbsp;京公网安备11000002002023号
                </a>
            </div>            
        </div>
    );
}

export default MainRight;