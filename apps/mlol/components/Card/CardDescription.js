import { makeStyles } from '@material-ui/core';
import styles from '../../styles/Card.module.css'


/**
 * Card 底部小字，展示评论数。因为小于 12px，所以使用 svg 实现
 *
 * @param props - CardDescription 组件传参
 */
export function CardDescription(props) {

  const { text } = props;
  return (
    <svg className={styles.cardDesc}>
      <text fontSize="10" y="10">
        {text}
      </text>
    </svg>
  );
}