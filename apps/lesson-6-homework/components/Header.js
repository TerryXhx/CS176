import React from "react";
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <div className={`${styles.header} ${className? className: ""}`}>
            <img class="logo" src="https://unsplash.com/photos/akAnLCSDoD8" alt=""/>
            <section className={styles.music_info}>
                <div>
                    <p>CattyBoard Top 100 Single Charts (11.06.36)</p>
                    <p className="hide">Unknown artist</p>
                    <p className="hide">2016. Carts. 100 songs</p>
                </div>
                <div>
                    <i className="fa fa-play">&nbsp; Play all</i>
                    <i className="fa fa-plus">&nbsp; Add to</i>
                    <i className="fa fa-ellipsis-h">&nbsp; More</i>
                </div>
            </section>
        </div>
    );
}