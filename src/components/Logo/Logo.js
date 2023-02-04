import React from "react";
import styled from "styled-components/macro";

const Logo = ({ ...props }) => {
    return (
        <Link href="/">
            <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
        </Link>
    );
};

const Link = styled.a`
    text-decoration: none;
`;

const Wrapper = styled.h1`
    font-size: ${24 / 16}rem;
    font-weight: ${(p) => p.theme.weights.bold};
`;

export default Logo;
