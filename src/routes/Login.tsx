import { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { useAuthStore } from "../stores/AuthStore";

type User = {
  email: string;
  password: string;
};

const userInput: User = {
  email: "",
  password: "",
};

function testAPI(email: string, password: string) {
  const exampleUser = { email: "kike@hotmail.com", password: "1234" };
  if (email === exampleUser.email)
    if (password === exampleUser.password) {
      console.log(email);
      return <Navigate to="/" replace />;
    }
  return false;
}

export function Login(): JSX.Element {
  const { token } = useAuthStore();
  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <form className="flex flex-col justify-between gap-8 bg-dark h-screen w-screen px-5 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-title">Welcome to Cine-Scape</h1>
        <p className="text-description">
          You need to login to be able to make reservations <br /> and add
          movies to your watchlist.
        </p>
        <Input name="email" className="max-width" type="email" />
        <Input name="password" className="max-width" type="password" />
      </div>
      <div className="flex ">
        <Button variant="primary" height="small" label="Login" type="submit" />
      </div>
    </form>
  );
}
