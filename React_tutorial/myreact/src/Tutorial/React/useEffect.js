import { useEffect, useState } from 'react';

function useEffect1() {
  // (1) App 그림이 최초 그려질 떄
  // (2) 상태변수가 변경될 떄.(dependencyList에 등록되어 있어야 함.)
  // (3) 의존 리스트 관리르 할 수 있다.

  const [data, setdata] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운롣 받고 *통신)
    let downloadData = 5; //
    setdata(downloadData);
  };

  useEffect(() => {
    console.log('useEffect() 실행됨');
    download();
  }, [search]);

  return (
    <div>
      <h1>검색</h1>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터 {data}</h1>
      <button
        onClick={() => {
          setdata(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default useEffect1;
