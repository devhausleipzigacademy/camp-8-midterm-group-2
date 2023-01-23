import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { exampleDB, useAuthStore } from "../stores/AuthStore";

export function Login() {

  const [emailInput, setEmail] = useState(""); //for Component
  const [password, setPassword] = useState(""); //for Component

  const { token, setToken } = useAuthStore();
  const { setId } = useAuthStore();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currentUser = exampleDB.find(
      (element) => element.email === emailInput
    );
    if (currentUser !== undefined && currentUser.password === password) {
      setToken("test-token");
      setId(currentUser.id);
      navigate("/");
    }
    setError("Incorrect Credentials");
  }

  if (token) return <Navigate to="/" replace />;
  return (
    <form className="flex flex-col justify-between gap-8 bg-dark h-screen px-5 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-title">Welcome to Cine-Scape</h1>
        <p className="text-description">
          You need to login to be able to make reservations <br /> and add
          movies to your watchlist.
        </p>
        <Input type="email" onChange={(event) => setEmail(event.target.value)} />
        <Input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="flex ">
        <Button
          variant="primary"
          height="small"
          label="Login"
          onClick={() => {handleSubmit}}
          type="submit"
        />
      </div>
    </form>
  );
}
