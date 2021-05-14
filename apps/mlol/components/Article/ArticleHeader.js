import ArticleAuthor from './ArticleAuthor';
import styles from '../../styles/Article.module.css'

/**
 * 文章标题 + 作者栏
 *
 * @param props
 */
export default function ArticleHeader(props) {
  const { title, fav, avatarUrl, name, remark } = props;

  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <ArticleAuthor
        name={name}
        avatarUrl={avatarUrl}
        fav={fav}
        remark={remark}
      />
    </div>
  );
}