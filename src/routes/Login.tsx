import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { useAuthStore } from "../stores/AuthStore";

export function Login(): JSX.Element {
  const { setToken, setUser } = useAuthStore();

  // const [ email, setEmail ] = useState("")
  // const [ password, setPassword ] = useState("")
  //// ---> similar to:
  const [formFields, setFormFields] = useState({ email: "", password: "" }); //inputEmail an inputPassword will be taken out from the form
  const navigate = useNavigate();

  async function loginCall() {

    //formFields: correct,
    const response = await axios.post("http://localhost:3000/auth/login", {
      //request-Body:
      email: formFields.email as string,
      password: formFields.password as string,
    }).then((res) => res.data);

    console.log("response" + response)

    const token = response.token;
    const user = response.user;

    console.log(response.token, response.user)
    //response: something comes back, but token and user are undefined

    setToken(token);
    setUser(user);

    if (token) {
      navigate("/");
    }
  }

  //can use later to add a registration-option:
  // let [loginOrRegister, changeLoginOrRegister] = useState("signin")
  // const changeAuthMode = () => {
  //   changeLoginOrRegister(loginOrRegister === "signin" ? "signup" : "signin")
  // } {}

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loginCall();
  }

  let error = "";
  return (
    <form
      // conSubmit={checkIfMatch}
      className="flex flex-col justify-between gap-8 h-screen px-5 py-8"
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-title">Welcome to Cine-Scape</h1>
        <p className="text-red text-description">{error}</p>
        <Input
          type="email"
          value={formFields.email}
          onChange={(e) =>
            setFormFields(
              //when react calls the callback function of useState it will pass THE PREVIOUS value as argument.
              //It will give this value to whatever placeholder-name we've choosen, in our care prevVal
              (prevVal) => {
                return { ...prevVal, email: e.target.value };
              }
            )
          }
          name="email"
          placeholder="your Email goes here"
          required
        />
        <Input
          type="password"
          value={formFields.password}
          onChange={(e) =>
            setFormFields((prevVal) => {
              return { ...prevVal, password: e.target.value };
            })
          }
          name="password"
          placeholder="Please enter Your password here"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          variant="primary"
          height="small"
          label="Login"
          disabled={false}
          onClick={() => {}}
          type="submit"
        />
        {/* <Button
          variant="secondary"
          height="small"
          label="Register"
          onClick={()=>{}}
          type="submit"
        /> */}
      </div>
    </form>
  );
}
