import { useDispatch } from "react-redux";

import { logout } from "../store/authSlice";
import { authService } from "../services";

export default function LogoutBtn() {
  const dispatch = useDispatch();

  function logoutHandler() {
    authService
      .logout()
      .then(() => dispatch(logout()))
      .catch(alert);
  }

  return (
    <button
      type="button"
      onClick={logoutHandler}
      className="inline-block rounded-full px-6 py-2 duration-200 hover:bg-blue-100"
    >
      Logout
    </button>
  );
}
