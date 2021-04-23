import styles from '../styles/Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.currentSong}>
                <img src="https://i.imgur.com/xDSTaej.jpg" alt="current song" />
                <div className={styles.currentSongInfo}>
                    <p className={styles.title}>If Ain't Love</p>
                    <p className={styles.singer}>Catson Derulo</p>
                </div>

            </div>

            <div class={styles.controlPanel}>
                <i className="fa fa-step-backward" />
                <i className="fa fa-pause" />
                <i className="fa fa-step-forward" />
                <i className="fa fa-repeat" />
                <i className="fa fa-random" />
            </div>
        </footer>
    );
}
export default Footer;