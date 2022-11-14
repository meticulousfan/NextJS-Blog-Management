import styles from "./User.module.css";

type Props = {
  id: number;
  body: string;
  title: string;
  userId: number;
  onClick: () => void;
};

export default function User({
  body,
  title,
  userId,
  onClick,
}: Props): JSX.Element {
  return (
    <div className={styles.User} onClick={onClick}>
      <span>{userId}</span>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}
