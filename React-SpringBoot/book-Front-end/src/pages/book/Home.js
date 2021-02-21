import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/book')
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      }); //비동기 함수
  }, []);

  return (
    <div>
      {Books.map((book) => (
        <BookItem />
      ))}
    </div>
  );
};

export default Home;
<h1>책 리스트 보기</h1>;
q;
