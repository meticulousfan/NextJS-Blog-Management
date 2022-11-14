import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import PostCreateForm from "../../components/PostCreateForm";
import createNewPost from "../../utils/createNewPost";
import { UserProps, PostType, InputType } from "../../types/main";
import { GetStaticPaths } from "next";
import { StaticPropsType } from "../../types/layout";
import { GetStaticPropsContext } from "next";
export const PostContext = React.createContext({
  disable: false as boolean,
  setDisable: (flag: boolean): void => {},
});

const getPostsByUser = async (id: number): Promise<PostType[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  const result = await response.json();
  return result;
};

export default function User({ posts = [], id }: UserProps): JSX.Element {
  const [postList, setPostList] = useState<PostType[]>([]);
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const handleSubmit = async (value: InputType): Promise<void> => {
    const result = await createNewPost(value.title, value.body, id);
    if (result) setDisable(false);
    const newPosts = await getPostsByUser(id);
    setPostList(newPosts);
  };

  const value = {
    disable,
    setDisable,
  };

  return (
    <PostContext.Provider value={value}>
      <div>
        <PostCreateForm handleSubmit={handleSubmit}></PostCreateForm>
      </div>
      {postList.map((u, index) => (
        <Post title={u.title} body={u.body} key={index}></Post>
      ))}
    </PostContext.Provider>
  );
}

export async function getStaticPaths(): Promise<GetStaticPaths> {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<StaticPropsType> {
  if (!params?.id || typeof params.id === "object") {
    return {
      props: {
        posts: [] as PostType[],
        id: "0",
      },
    };
  }
  try {
    const posts = await getPostsByUser(parseInt(params.id, 10));
    return {
      props: {
        posts,
        id: params?.id,
      },
    };
  } catch (err) {
    return {
      props: {
        posts: [],
        id: params?.id,
      },
    };
  }
}
