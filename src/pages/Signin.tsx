import React from "react";
import SigninContainer from "../containers/SigninContainer";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (token !== null) navigate("/");

  return <SigninContainer />;
}
