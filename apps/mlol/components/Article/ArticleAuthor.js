import { Avatar, Button } from '@material-ui/core';
import { CardDescription } from '../Card/CardDescription';
import styles from '../../styles/Article.module.css';

export default function ArticleAuthor(props) {
  const { avatarUrl, fav, name, remark } = props;

  return (
    <div className={styles.author}>
      <div className={styles.avatar}>
        <Avatar alt={name} src={avatarUrl}>
          {name}
        </Avatar>
        <div className={styles.name}>
          <p>{name}</p>
          {/* <p>
            <CardDescription text={remark} />
          </p> */}
        </div>
      </div>
      <Button
        color="primary"
        variant={!fav ? 'contained' : 'outlined'}
        disableElevation={true}
        className={styles.btn}
      >
        {!fav ? '关注' : '取消关注'}
      </Button>
    </div>
  );
}