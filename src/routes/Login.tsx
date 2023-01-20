import { FormEvent, useState } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";

function testAPI(email: string, password: string) {
  const exampleUser = { email: "kike@hotmail.com", password: "1234" };
  if (email === exampleUser.email)
    if (password === exampleUser.password) {
      return true;
    }
  return false;
}

export function Login() {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  return (
    <form className="flex flex-col justify-between gap-8 bg-dark h-screen px-5 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-title">Welcome to Cine-Scape</h1>
        <p className="text-description">
          You need to login to be able to make reservations <br /> and add
          movies to your watchlist.
        </p>
        <Input type="email" onChange={() => setEmailState(emailState)} />
        <Input
          type="password"
          onChange={() => setPasswordState(passwordState)}
        />
      </div>
      <div className="flex ">
        <Button
          variant="primary"
          height="small"
          label="Login"
          onClick={(event) => {}}
          type="submit"
        />
      </div>
    </form>
  );
}
