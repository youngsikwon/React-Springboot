package com.ys.book.web;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * 통합테스트 (모든 Bean들을 똑겉이 IOC 올리고 테스트함.
 * SpringBootTest.WebEnvironment.MOCK --> 실제 톰캣이 아닌, 가상 톰캣으로 테스트 함.
 * SpringBootTest.WebEnvironment.RaNDOM_POR ---> 실제 톰캣으로 테스트
 *
 *
 *
 * @AutoConfigureMockMvc MockMvc를 IoC에 등록 가능.
 * @Transactional 각 각의 테스트함수가 종료 될 때마다 트랜잭션을 롤백 해줌.
 */
//
    @Slf4j
    @Transactional
    @AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class  BookControllerIntegreTest {


    @Autowired
    private MockMvc mockMvc;

    @Test
    public void save_테스트(){
        log.info("save 테스트 시작 ======");
    }



}
