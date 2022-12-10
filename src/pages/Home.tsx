import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../types";
import { useSelector } from "react-redux";
import ListContainer from "../containers/ListContainer";

export default function Home() {
  const navigate = useNavigate();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  useEffect(() => {
    if (token === null) navigate("/signin");
  }, []);

  return <ListContainer />;
}
