import ArticleContent from "./ArticleContent";
import ArticleHeader from "./ArticleHeader";

export default function Article(props) {
  const datum = props.data;
  if (datum) {
    var author = datum["author"],
      title = datum["title"],
      content = datum["content"];
  } else {
    var author = "",
      title = "Loading",
      content = "";
  }

  return (
    <>
      <ArticleHeader {...author} title={title} />
      <ArticleContent contentData={content} />
    </>
  );
}
