import { Input } from "../components/Input";

export function Login({}) {
  return (
    <div className="flex flex-col gap-8">
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
    </div>
  );
}
