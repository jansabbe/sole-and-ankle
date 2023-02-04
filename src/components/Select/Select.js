import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";

const Select = ({ label, value, children, ...delegated }) => {
    return (
        <Wrapper>
            <VisibleLabel>{label}</VisibleLabel>
            <SelectWrapper>
                <NativeSelect {...delegated}>{children}</NativeSelect>
                <ChevronIcon id="chevron-down" size={24} strokeWidth={1.5} />
            </SelectWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.label`
    display: flex;
    align-items: baseline;
    gap: 16px;
`;

const VisibleLabel = styled.span`
    color: ${(p) => p.theme.colors.gray[700]};
    font-weight: ${(p) => p.theme.weights.normal};
`;

const SelectWrapper = styled.div`
    position: relative;
`;

const NativeSelect = styled.select`
    appearance: none;
    color: ${(p) => p.theme.colors.gray[900]};
    font-weight: ${(p) => p.theme.weights.medium};
    border: none;
    border-radius: 8px;
    background-color: ${(p) => p.theme.colors.gray[100]};
    padding: 12px 42px 12px 16px;
    cursor: pointer;
`;

const ChevronIcon = styled(Icon)`
    position: absolute;
    top: 0;
    bottom: 0;
    height: fit-content;
    margin-block: auto;
    right: 16px;
`;

export default Select;
