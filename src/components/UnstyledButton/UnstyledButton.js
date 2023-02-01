import styled from "styled-components/macro";

export default styled.button`
    display: ${(props) => props.display || "block"};
    margin: 0;
    padding: 0;
    background-color: transparent;
    color: inherit;
    border: none;
    cursor: pointer;
    &:focus-visible {
        outline-offset: 2px;
    }
`;
