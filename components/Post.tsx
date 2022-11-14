type Props = {
  title: string;
  body: string;
};

export default function Post({ body, title }: Props): JSX.Element {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
