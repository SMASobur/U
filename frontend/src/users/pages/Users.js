import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Raju",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      places: 3,
    },
  ];
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
