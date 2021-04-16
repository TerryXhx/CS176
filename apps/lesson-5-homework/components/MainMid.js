function MainMid(props) {
    return (
        <div className="main-mid">
          <div className="feed-list">
            {
              props.children
            }
          </div>
        </div>
    );
}

export default MainMid;