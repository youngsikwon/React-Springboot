import React from 'react'
import styled from 'styled-components'

const HeaderList = styled.div`
    border: 1px solid black;
    height: 300px;
`

const Header = () => {
    return (
        <HeaderList>
            <ul>
                <li>오시는길 : 서울 구로구 </li>
                <li>전화번호</li>
            </ul>
        </HeaderList>
    )
}

export default Header
