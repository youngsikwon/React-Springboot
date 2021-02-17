package com.ys.book.domain;

// 단위테스트 (DB 관련 Been이 Ioc 등록되면 됨)


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

//단위 테스트
// 가짜 디비로 테스트
@Transactional
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@DataJpaTest // Repository 중 IoC 등록 해줌..
public class BookRepositoryTest {

    @Autowired
    private BookRepository bookRepository;
}
