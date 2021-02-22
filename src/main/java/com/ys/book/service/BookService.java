package com.ys.book.service;


import com.ys.book.domain.Book;
import com.ys.book.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


//트랜잭션 관리

@RequiredArgsConstructor
@Service
public class BookService {

    private final BookRepository bookRepository;

    @Transactional
    public Book 저장하기(Book book){
        return bookRepository.save(book);
    }
    @Transactional(readOnly = true) // JPA 변경감지 내부 기능 활성화 x, update시의 정합성을 유지, insert의 유령 데이터 현상(팬텀x) 못막
    public Book 한건가져오기(Long id){
        return bookRepository.findById(id)
                .orElseThrow(() ->
                        new IllegalArgumentException("ID : 확인 해주세요"));
    }

    @Transactional(readOnly = true)
    public List<Book> 모두가져오기(){
        return bookRepository.findAll();
    }
    @Transactional
    public Book 수정(Long id, Book book){
        //더티체팅 update치기
        Book bookEntity = bookRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("ID: 확인 해주세요")); //영속화 (book 프로젝트)
        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());
        return bookEntity;
    }// 함수 종료 => 트랜잭션 종료 => 영속화 되어있는 데이터 DB로 갱신(flush) => Commit =>> 더티체킹

    @Transactional
    public String 삭제하기(Long id){
         bookRepository.deleteById(id); // 오류 뜨면 익셉션뜸.
        return "ok";
    }



}
