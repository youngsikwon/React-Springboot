package com.ys.book.domain;

import org.springframework.data.jpa.repository.JpaRepository;


// @Repository 적어야 스프링 loc에 빈으로 등록
// JpaRepository를 extends -> 생략
// JpaRepostiory CRUD 가능
public interface BookRepository extends JpaRepository<Book, Long> {
}
