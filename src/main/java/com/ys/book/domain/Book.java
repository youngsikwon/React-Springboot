package com.ys.book.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity // 서버 실행시 테이블 h2 생성
public class Book {

    @Id // pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)//해당 데이터베이스 번호 증가
    private Long id;

    private String title;
    private String author;
}
