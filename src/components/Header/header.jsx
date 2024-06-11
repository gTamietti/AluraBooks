import React from "react";
import Logo from '../Logo/logo'
import OpcoesHeader from "../OpcoesHeader/opcoes";
import IconesHeader from "../IconesHeader/icones";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return(
    <HeaderContainer>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
    </HeaderContainer>
    )
}

export default Header