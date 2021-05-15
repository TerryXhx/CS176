import { useRouter } from 'next/router';
import styles from '../../styles/Card.module.css';

export function CardContainer(props) {
  const router = useRouter();
  const { id } = props;
  return (
    <section className={styles.root}>
      <a
        href={`/post/${id}`}
        className={styles.anchor}
        onClick={(e) => {
          e.preventDefault();
          const href = e.currentTarget.href;
          router.push(href);
        }}
      >
        <div className={styles.detail}>{props.children}</div>
      </a>
    </section>
  );
}