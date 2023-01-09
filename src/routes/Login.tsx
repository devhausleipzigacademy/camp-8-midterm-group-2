import { useState } from "react";
import { Input } from "../components/Input";

function testAPI(email: string, password: string) {
  const exampleUser = { email: "kike@hotmail.com", password: "1234" };
  if (email === exampleUser.email)
    if (password === exampleUser.password) {
      return true;
    } else return false;
}

export function Login({}) {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const result = testAPI(emailState, passwordState);
        console.log(result);
      }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-title">Welcome to Cine-Scape</h1>
        <p className="text-description">
          You need to login to be able to make reservations <br /> and add
          movies to your watchlist.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Input type="email" state={emailState} setState={setEmailState} />
        <Input
          type="password"
          state={passwordState}
          setState={setPasswordState}
        />
      </div>
      <button type="submit" className="bg-yellow">
        Click Here
      </button>
    </form>
  );
}
