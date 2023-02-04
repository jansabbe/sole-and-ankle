import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const Logo = ({ className, ...props }) => {
    return (
        <Link className={className} href="/">
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
