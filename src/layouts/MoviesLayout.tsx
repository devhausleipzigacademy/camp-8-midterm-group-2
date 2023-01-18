import { Outlet } from "react-router-dom";

export function MovieLayout() {
  const { token, clear } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;

  return (
    <div>
      <header>chevronBack</header>
      <Outlet />
    </div>
  );
}
