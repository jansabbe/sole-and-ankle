import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Icon from '../Icon';

const Select = ({ label, value, children, ...delegated }) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(
    (child) => child.props.value === value
  );

  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>

      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>

        <DisplayedBit>
          {displayedValue}
          <ChevronIcon
            id="chevron-down"
            size={24}
            strokeWidth={1.5}
          />
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label``;

const VisibleLabel = styled.span`
`;

const SelectWrapper = styled.div`
`;

const NativeSelect = styled.select`
`;

const DisplayedBit = styled.span`
`;

const ChevronIcon = styled(Icon)`
`;

export default Select;
