import User from "./User";
import React from "react";
import styles from "./UsersList.module.css";
import { UserContext } from "../pages";
import { UserType } from "../types/main";

export default function UsersList(): JSX.Element {
  const { users, getPostsByUser } = React.useContext(UserContext);
  return (
    <div className={styles.UsersList}>
      <h1>Users</h1>
      <div>
        {users &&
          users.map((u: UserType) => (
            <User key={u.id} {...u} onClick={() => getPostsByUser(u)} />
          ))}
      </div>
    </div>
  );
}
