import React from "react";
import styled from "styled-components/macro";

const Breadcrumbs = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
    return (
        <CrumbWrapper>
            <CrumbLink href={href} {...delegated}>
                {children}
            </CrumbLink>
        </CrumbWrapper>
    );
};

const CrumbWrapper = styled.div`
    &:not(:last-child)::after {
        content: "/";
        margin-left: 8px;
        color: ${(p) => p.theme.colors.gray[300]};
    }
`;

const CrumbLink = styled.a`
    color: ${(p) => p.theme.colors.gray[700]};
    text-decoration: none;
    &:hover {
        color: ${(p) => p.theme.colors.gray[900]};
        text-decoration: underline;
    }
`;

const Wrapper = styled.nav`
    display: flex;
    font-size: ${14 / 16}rem;
    gap: 8px;
`;
export default Breadcrumbs;
