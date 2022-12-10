import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  BookOutlined,
  HomeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import "./Book.module.css";
import { BookType } from "../types";
import moment from "moment";
interface BookProps extends BookType {}

const Book: FC<BookProps> = ({ bookId, title, author, createAt, url }) => {
  return (
    <div className="book">
      <div className="title">
        <Link to={`/book/${bookId}`} className="link_detail_title">
          <BookOutlined /> {title}
        </Link>
      </div>
      <div className="author">
        <Link to={`/book/${bookId}`} className="link_detail_author">
          {author}
        </Link>
      </div>
      <div className="created">
        {moment(createAt).format("MM-DD-YYYY hh:mm a")}
      </div>
      <div className="tooltips">
        <Tooltip title={url}>
          <a href={url} target="_blank" rel="noreferrer" className="link_url">
            <Button
              size="small"
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
              className="button_url"
            />
          </a>
        </Tooltip>
        <Tooltip title="Edit">
          <Button
            size="small"
            shape="circle"
            icon={<EditOutlined />}
            className="button_edit"
          />
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            size="small"
            type="primary"
            shape="circle"
            danger
            icon={<DeleteOutlined />}
            className="button_delete"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Book;
