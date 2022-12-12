import React, { FC, useEffect } from "react";
import LayoutComponent from "./Layout";
import { Layout, Button, Table } from "antd";
import { BookType } from "../types";
import Book from "./Book";
import "./List.module.css";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
  getBooks: () => void;
  logout: () => void;
  deleteBook: (bookId: number) => void;
}

const List: FC<ListProps> = ({
  books,
  loading,
  getBooks,
  error,
  logout,
  deleteBook,
}) => {
  const navigate = useNavigate();

  const goAdd = () => {
    navigate("/add");
  };

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    if (error !== null) {
      logout();
    }
  }, [error, logout]);
  return (
    <LayoutComponent>
      <Header title="Book List">
        Book List
        <Button key="2" type="primary" onClick={goAdd} className="button">
          Add Book
        </Button>
        <Button key="1" type="primary" onClick={logout} className="button">
          Logout
        </Button>
      </Header>
      <Table
        dataSource={books || []}
        columns={[
          {
            title: "Book",
            dataIndex: "book",
            key: "book",
            render: (text, record) => (
              <Book {...record} deleteBook={deleteBook} />
            ),
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
        className="table"
      />
    </LayoutComponent>
  );
};

export default List;
