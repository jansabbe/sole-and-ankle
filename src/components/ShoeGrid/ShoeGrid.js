import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
    return (
        <Wrapper>
            {SHOES.map((shoe) => (
                <ShoeCardWrapper key={shoe.slug}>
                    <ShoeCard {...shoe} />
                </ShoeCardWrapper>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 60px;
`;

const ShoeCardWrapper = styled.div`
    flex: 1 0 270px;
`;

export default ShoeGrid;
