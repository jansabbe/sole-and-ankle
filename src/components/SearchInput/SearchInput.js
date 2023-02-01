import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";

const SearchInput = ({ label, ...delegated }) => {
    return (
        <Label>
            <VisuallyHidden>Search</VisuallyHidden>
            <Input {...delegated} placeholder="Search…" />
            <SearchIcon id="search" strokeWidth={1} size={16} />
        </Label>
    );
};

const Label = styled.label`
    position: relative;
`;

const Input = styled.input`
    background-color: transparent;
    padding-left: 24px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
    color: ${({ theme }) => theme.colors.gray[100]};
    outline-offset: 4px;
    &::placeholder {
        color: ${COLORS.gray[500]};
    }
`;

const SearchIcon = styled(Icon)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 16px;
    width: 16px;
    margin: auto;
`;

export default SearchInput;
