package com.ys.book.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

/**
 * 통합테스트 (모든 Bean들을 똑겉이 IOC 올리고 테스트함.
 * SpringBootTest.WebEnvironment.MOCK --> 실제 톰캣이 아닌, 가상 톰캣으로 테스트 함.
 * SpringBootTest.WebEnvironment.RaNDOM_POR ---> 실제 톰캣으로 테스트
 */
//통합테스

    @AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class  BookControllerIntegreTest {


    @Autowired
    private MockMvc mockMvc;
}
