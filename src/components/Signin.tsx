import React, { FC, useRef } from "react";
import { Row, Col, Input, Button, InputRef } from "antd";
import "./Signin.modules.css";
import { LoginReqType } from "../types";
import { useNavigate } from "react-router-dom";

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin: FC<SigninProps> = ({ login }) => {
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    const email = emailRef.current!.input!.value;
    const password = passwordRef.current!.input!.value;

    login({ email, password });
    navigate("/");
  };

  return (
    <Row align="middle" className="signin_row">
      <Col span={24}>
        <Row className="signin_contents">
          <Col span={12}>
            <img src="/bg_signin.png" alt="Signin" className="signin_bg" />
          </Col>
          <Col span={12}>
            <div className="signin_title">My Books</div>
            <div className="signin_subtitle">Please Note Your Opinion</div>
            <div className="signin_underline" />
            <div className="email_title">
              Email
              <span className="required"> *</span>
            </div>
            <div className="input_area">
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className="input"
                ref={emailRef}
              ></Input>
            </div>
            <div className="password_title">
              Password
              <span className="required"> *</span>
            </div>
            <div className="input_area">
              <Input
                type="password"
                autoComplete="current-password"
                className="input"
                ref={passwordRef}
              ></Input>
            </div>
            <div className="button_area">
              <Button size="large" className="button" onClick={handleClick}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
