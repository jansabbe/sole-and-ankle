import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
    return (
        <Wrapper>
            <MarketingMessage>
                Free shipping on domestic orders over $75!
            </MarketingMessage>
            <SearchInput />
            <HelpLink href="/help">Help</HelpLink>
            <UnstyledButton>
                <Icon id="shopping-bag" strokeWidth={1} />
            </UnstyledButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 12px 32px;
    background-color: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.gray[300]};
    font-weight: ${({ theme }) => theme.weights.medium};
    font-size: ${14 / 16}rem;
`;

const MarketingMessage = styled.span`
    margin-right: auto;
    color: white;
`;

const HelpLink = styled.a`
    text-decoration: none;
    outline-offset: 2px;

    &:not(:focus-visible) {
        outline: none;
    }
`;

export default SuperHeader;
