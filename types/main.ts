export type PostType = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

export type UserType = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

export type UserProps = {
  posts: PostType[];
  id: number;
};

export type InputType = {
  title: string;
  body: string;
};
