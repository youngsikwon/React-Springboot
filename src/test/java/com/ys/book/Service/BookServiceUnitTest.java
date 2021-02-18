package com.ys.book.Service;

//단위 테스트 (Serevice와 관련된 애들만 메모리에 띄움.)


import com.ys.book.domain.Book;
import com.ys.book.domain.BookRepository;
import com.ys.book.service.BookService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
/*
// 단위테스트 (service와 꽌련된 애들만 메모리에 띄우게 됨.
   Respository => 가짜 객체로 만들 수 있음.
 */

@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {


    @InjectMocks //BookService 해당 파일에 @Mock로 등록된 모든 객체 주입.
    private BookRepository bookRepository;

    @Mock
    private BookService bookService;


    @Test
    public void 저장_테스트(){
        //BODMockito 방식

        Book book = new Book();
        book.setTitle("제목");
        book.setAuthor("저자");


        //stub - 동적 지정
    }
}
