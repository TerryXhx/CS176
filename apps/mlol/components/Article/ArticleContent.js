import styles from "../../styles/Article.module.css";

export default function ArticleContent(props) {
  return (
    <>
      <div className={styles.articleContent}>
        <div dangerouslySetInnerHTML={{ __html: props.contentData }} />
      </div>
      <div className={styles.disclaimer}>
        <p class="content">
          免责声明:本文仅代表该作者观点，不代表英雄联盟、掌上英雄联盟立场，所有信息请以英雄联盟官方公告为准。
        </p>
      </div>
    </>
  );
}