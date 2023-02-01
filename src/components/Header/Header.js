import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Logo />
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
            </MainHeader>
        </header>
    );
};

const MainHeader = styled.div`
    padding: 24px 32px;
    color: ${(p) => p.theme.colors.gray[900]};
    border-bottom: 1px solid ${(p) => p.theme.colors.gray[300]};
    display: flex;
    align-items: baseline;
`;

const Nav = styled.nav`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 48px;
`;

const NavLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${18 / 16}rem;
    font-weight: ${(p) => p.theme.weights.medium};

    &:first-of-type {
        color: ${(p) => p.theme.colors.secondary};
    }
`;

export default Header;
