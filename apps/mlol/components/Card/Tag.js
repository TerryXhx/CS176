import styles from '../../styles/Card.module.css';

export function Tag(props) {
  const { text } = props;

  return (
    <svg
      className={styles.tag}
      width="32px"
      height="13px"
      viewBox="0 0 78 40"
    >
      <rect x="3" y="1" rx="6" width="74" height="38" />
      <text fontSize="25" x="15" y="29">
        {text}
      </text>
    </svg>
  );
}
