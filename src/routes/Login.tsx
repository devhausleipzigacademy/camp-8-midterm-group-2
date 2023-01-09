import { Input } from "../components/Input";

function testAPI(email: string, password: string) {
  const exampleUser = { email, password };
  if (email === exampleUser.email)
    if (password === exampleUser.password) {
      return true;
    } else return false;
}

export function Login({}) {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-title">Welcome to Cine-Scape</h1>
        <p className="text-description">
          You need to login to be able to make reservations <br /> and add
          movies to your watchlist.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Input type="email" />
        <Input type="password" />
      </div>
      <button className="bg-yellow">Click Here</button>
    </form>
  );
}
