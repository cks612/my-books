import { FC, useRef } from "react";
import LayoutComponent from "./Layout";
import {
  Layout,
  Button,
  Input,
  InputRef,
  message as messageDialog,
} from "antd";
import {
  BookOutlined,
  HomeOutlined,
  EditOutlined,
  ForkOutlined,
} from "@ant-design/icons";
import "./Add.module.css";
import TextAreaType from "rc-textarea";
import { BookReqType } from "../types";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { TextArea } = Input;
interface Addprops {
  loading: boolean;
  logout: () => void;
  add: (book: BookReqType) => void;
}
const Add: FC<Addprops> = ({ loading, logout, add }) => {
  const titleRef = useRef<InputRef>(null);
  const messageRef = useRef<TextAreaType>(null);
  const authorRef = useRef<TextAreaType>(null);
  const urlRef = useRef<TextAreaType>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    const title = titleRef.current!.input?.value;
    const message = messageRef.current!.resizableTextArea.textArea
      .value as string;
    const author = authorRef.current!.resizableTextArea.textArea
      .value as string;
    const url = urlRef.current!?.resizableTextArea.textArea.value as string;

    console.log(title);
    console.log(message);
    console.log(author);
    console.log(url);

    if (
      title === undefined ||
      message === undefined ||
      author === undefined ||
      url === undefined
    ) {
      messageDialog.error("Please fill out all inputs");
      return;
    }
    add({
      title,
      message,
      author,
      url,
    });
    navigate("/");
  };
  return (
    <LayoutComponent>
      <Header title="Book List">
        <ForkOutlined>Add Book</ForkOutlined>
        <Button
          key="1"
          type="primary"
          onClick={logout}
          className="button_logout"
        >
          Logout
        </Button>
      </Header>
      <div className="add">
        <div className="input_title">
          Title
          <span className="required"> *</span>
        </div>
        <div className="input_area">
          <Input placeholder="Title" className="input" ref={titleRef} />
        </div>
        <div className="input_comment">
          Comment
          <span className="required"> *</span>
        </div>
        <div className="input_area">
          <TextArea placeholder="Comment" className="input" ref={messageRef} />
        </div>
        <div className="input_author">
          Author
          <span className="required"> *</span>
        </div>
        <div className="input_area">
          <TextArea placeholder="Author" className="input" ref={authorRef} />
        </div>
        <div className="input_url">
          URL
          <span className="required"> *</span>
        </div>
        <div className="input_area">
          <TextArea placeholder="Url" className="input" ref={urlRef} />
        </div>
        <div className="input_area">
          <Button size="large" loading={loading} onClick={handleClick}>
            Add
          </Button>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Add;
