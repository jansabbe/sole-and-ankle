import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
    const [sortId, setSortId] = React.useState("newest");

    return (
        <>
            <Header />
            <Main>
                <ShoeIndex sortId={sortId} setSortId={setSortId} />
            </Main>
        </>
    );
};

const Main = styled.main`
    // avoid margin collapse on safari on the bottom
    padding-bottom: 1px;
`;

export default App;
