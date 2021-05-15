import { memo } from "react";

import { CardDescription } from "./CardDescription";
import { Tag } from "./Tag";
import { CardContainer } from "./CardContainer";
import styles from "../../styles/Card.module.css";

export function OnePicCard(props) {
  const {
    data: { id, imgUrl, title, author, commentsCount },
  } = props;

  return (
    <CardContainer id={id}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.desc}>
          <Tag text="LOL" />
          <CardDescription text={`  ${author}  评论 ${commentsCount}`} />
        </div>
      </div>

      <div className={styles.pic}>
        <div>
          <img src={imgUrl} />
        </div>
      </div>
    </CardContainer>
  );
}

export const MemoizedOnePicCard = memo(OnePicCard);
