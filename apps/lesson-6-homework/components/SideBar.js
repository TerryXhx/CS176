import styles from "../styles/SideBar.module.css"

function SideBar(){
    return (
        <div className={styles.sideBar}>
            <i className="fa fa-bars"></i>
            <i className="fa fa-home"></i>
            <i className="fa fa-search"></i>
            <i className="fa fa-volume-up"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-spotify"></i>
            <i className="fa fa-cog"></i>
            <i className="fa fa-soundcloud"></i>
        </div>
    );
}

export default SideBar;