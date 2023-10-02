import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) navigate("/login"); // if authetication needed but user not logged in
    //else if (!authentication && authStatus !== authentication) navigate("/"); // If auth not needed but logged in then navigate to home

    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <p>Loading...</p> : children;
}

export default Protected;
