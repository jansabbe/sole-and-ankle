import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

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
`;

const CrumbLink = styled.a`
`;

const Wrapper = styled.nav`
`;
export default Breadcrumbs;
