import NewsletterSignupForm from "../components/NewsletterSignupForm";
import UsersList from "../components/UsersList";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserType } from "../types/main";

export const UserContext = React.createContext({
  users: [] as UserType[],
  getPostsByUser: (value: UserType): void => {},
});

export type UserContextType = {
  users: UserType[];
  getPostsByUser: any;
};

export default function IndexPage(): JSX.Element {
  const [users, setUsers] = useState<UserType[]>([]);
  const [showNewsletterWidget, setShowNewsletterWidget] =
    useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1/posts"
        );
        const result = await response.json();
        setUsers(result);
      } catch {
        setUsers([]);
      }
    };
    getUsers();

    setTimeout(() => {
      setShowNewsletterWidget(true);
    }, 10000);
  }, []);

  const getPostsByUser = (user: UserType): void => {
    router.push(`/user/${user.id}`);
  };

  const value: UserContextType = {
    users,
    getPostsByUser,
  };

  return (
    <UserContext.Provider value={value}>
      <UsersList />
      {showNewsletterWidget && (
        <div>
          <h2>Join Our Newletter</h2>
          <NewsletterSignupForm />
        </div>
      )}
    </UserContext.Provider>
  );
}
