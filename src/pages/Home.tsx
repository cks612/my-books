import React from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/modules/auth";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (token === null) navigate("/signin");

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  );
}
