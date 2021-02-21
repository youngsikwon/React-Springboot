import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: '0',
    titile: '',
    content: '',
  });
  const [posts, setPosts] = useState([
    { id: 1, title: '제목', content: '내용' },
    { id: 2, title: '제목2', content: '내용' },
    { id: 3, title: '제목3', content: '내용' },
    { id: 4, title: '제목4', content: '내용' },
    { id: 5, title: '제목5', content: '내용' },
  ]);

  const handleWrite = (e) => {
    console.log(1, post.title);
    console.log(2, post.content);

    e.preventDefault(); //form태그가 하려는 액션을 중지.
    //ListPage의  setPosts 담기
    setPosts([...posts, post]);
    setNo(no + 1);
  };

  // const handleChangeTitle = (e) => {
  //   console.log({ title: e.target.value });
  //   setPosts({ title: e.target.value });
  // };

  // const handleChangeCotent = (e) => {
  //   console.log(e);
  //   setPosts({ content: e.target.value });
  // };

  // computed property names 문법 (키값 동적할당)
  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>리스트 페이지</h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호 : {post.id} | 제목 : {post.title} | 내용 : {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
