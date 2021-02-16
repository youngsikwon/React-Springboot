package com.ys.book.web;


import com.ys.book.domain.Book;
import com.ys.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor // Service 생성자를 통해서 만듬.
@RestController
public class BookController {


    private final BookService bookService;



    @PostMapping("/book")
    public ResponseEntity<?> save(@RequestBody Book book){

    return new ResponseEntity<>(bookService.저장하기(book), HttpStatus.OK);
    }


    @GetMapping("/book")
    public ResponseEntity<?> findaAll(){
        return new ResponseEntity<>(bookService.모두가져오기(), HttpStatus.OK);
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<?>findById(@PathVariable Long id){
        return new ResponseEntity<>(bookService.한건가져오기(id), HttpStatus.OK);
    }

    @PutMapping("/book/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book){
        return new ResponseEntity<>(bookService.한건가져오기(id, book), HttpStatus.OK);
    }
    @DeleteMapping("/book{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        return new ResponseEntity<>(bookService.삭제하기(id), HttpStatus.OK);
    }

}
