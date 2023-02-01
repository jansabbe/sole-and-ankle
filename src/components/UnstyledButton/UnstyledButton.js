import styled from 'styled-components/macro';

export default styled.button`
  display: ${(props) => props.display || 'block'};
`;
