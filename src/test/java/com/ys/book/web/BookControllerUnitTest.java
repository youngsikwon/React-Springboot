package com.ys.book.web;


//단위 테스트 (Controller, Fliter, ControllerAdvice

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ys.book.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;


@Slf4j
@WebMvcTest
public class BookControllerUnitTest {


    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookService bookService;


    //BDDMockito 패턴 given, when, then
    @Test
    public void save_테스트() throws JsonProcessingException {


    }

}

