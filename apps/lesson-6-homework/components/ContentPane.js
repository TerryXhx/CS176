import styles from '../styles/ContentPane.module.css'

function ContentPane() {
    return (
        <div className={styles.contentPane}>
            <div className={styles.albumPane}>
                <img src="https://i.imgur.com/xDSTaej.jpg" alt="catty board"/>
                <section className={styles.albumInfo}>
                    <div>
                        <p>CattyBoard Top 100 Single Charts</p>
                        <p className="hide">Unknown Artist</p>
                        <p className="hide">2016. Carts. 100 songs</p>
                    </div>
                    <div>
                        <i className="fa fa-play">&nbsp; Play all</i>
                        <i className="fa fa-plus">&nbsp; Add to</i>
                        <i className="fa fa-ellipsis-h">&nbsp; More</i>
                    </div>
                </section>
            </div>

            <ul className={styles.songList}>
                <li>
                    <p>1. One Dance</p>
                    <p className="hide">Crake feat CatKid &amp; Cyla</p>
                    <p className={styles.time}>2:54</p>
                    <p className="hide"><span className="cattyCloud">CattyCloud sync</span></p>
                </li>

                <li>
                    <p>2. Panda</p>
                    <p className="hide">Cattee</p>
                    <p className={styles.time}>4:06</p>
                    <p className="hide"><span className="cattyCloud">CattyCloud sync</span></p>
                </li>

                <li>
                    <p>3. Can't Stop the Feeling!e</p>
                    <p className="hide">Catin Cimberlakea</p>
                    <p className={styles.time}>3:56</p>
                    <p className="hide"><span className="cattyCloud">CattyCloud sync</span></p>
                </li>

                <li>
                    <p>4. Work From Home</p>
                    <p className="hide">Cat Harmony feat Colla</p>
                    <p className={styles.time}>3:34</p>
                    <p className="hide"><span className="cattyCloud">CattyCloud sync</span></p>
                </li>
            </ul>
        </div>
    );
}

export default ContentPane;