import React from "react";
import SigninContainer from "../containers/SigninContainer";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

export default function Signin() {
  const navigate = useNavigate();
  const token = useToken();

  if (token !== null) navigate("/");

  return <SigninContainer />;
}
