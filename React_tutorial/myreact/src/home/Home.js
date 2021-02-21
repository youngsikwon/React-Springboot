import { Button } from 'react-bootstrap';
import React from 'react';

import Styled from 'styled-components';

const StyledDeleteButton = Styled.button`
color:${(props) => (props.user.username === 'start' ? 'blue' : 'red')}
`;

//스타일 확장
const StyledAddButton = Styled(StyledDeleteButton)`
color:${(props) => (props.user.username === 'start' ? 'blue' : 'red')};
  background-color: green;
`;

// 부모 -> 어떤 데이터를 스타일링
const Home = (props) => {
  //구조분할 할당
  const { boards, setBoards, user } = props;

  return (
    <div>
      <Button variant="primary">primary</Button>{' '}
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((boards) => (
        <h3 key={boards.id}>
          제목 : {boards.title} 내용 ㅣ {boards.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
