import styled from 'styled-components';

export default function Terminal() {
  return (
    <StyledAside>
      <FlexContainer>
        <ColoredDots>
          <Dot style={{ backgroundColor: 'red' }} />
          <Dot style={{ backgroundColor: 'yellow' }} />
          <Dot style={{ backgroundColor: 'green' }} />
        </ColoredDots>
        <BashText>bash</BashText>
      </FlexContainer>
        <CommandText className="green">$ npm install next</CommandText>
        <CommandText className="white">+ next@10.2.3</CommandText>
        <CommandText className="white">added 1 package, and audited 2 packages in 3s</CommandText>
        <CommandText className="green">$</CommandText>
    </StyledAside>
  );
}

const StyledAside = styled.aside`
  background-color: black;
  color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 28rem;
  font-family: monospace;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColoredDots = styled.div`
  display: flex;
  gap: 0.5rem;
  color: red;
`;

const Dot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
`;

const BashText = styled.p`
  font-size: 0.875rem;
`;

const CommandText = styled.p`
  &.green {
    color: green;
  }

  &.white {
    color: white;
  }
`;
