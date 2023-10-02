import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { authService } from "./services";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) =>
        userData ? dispatch(login({ userData })) : dispatch(logout()),
      )
      .catch(console.error)
      .then(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="animate-pulse text-center text-lg">Loading...</p>;
  return (
    <>
      <div className="min-h-screen">
        <div className="block w-full">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
