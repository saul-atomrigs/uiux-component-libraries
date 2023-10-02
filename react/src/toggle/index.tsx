import { useState } from 'react';
import styled from 'styled-components';

export default function ToggleBox() {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <ToggleBoxContainer>
      <Message>I agree to receive marketing updates from XXX</Message>

      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? 'toggle--checked' : null}`} />
        <div className={`toggle-circle ${isOn ? 'toggle--checked' : null}`} />
      </ToggleContainer>
    </ToggleBoxContainer>
  );
}

const ToggleBoxContainer = styled.div`
  display: flex;
  gap: calc(1rem + 5vw);
  place-items: center;
  justify-content: center;
  padding: 1rem;
  background: #eee;
  border-radius: 0.5rem;
`;

const Message = styled.div`
  color: #999;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
`;

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 3rem;
    height: 1.25rem;
    padding: 0.2rem;
    border-radius: 10rem;
    border: 1px solid rgb(197, 197, 197);
    background-color: rgb(233, 233, 234);
  }

  > .toggle--checked {
    background-color: rgb(251, 247, 11);
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 10rem;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    margin: 0.15rem;
  }
  > .toggle--checked {
    left: 1.9rem;
    transition: 0.5s;
  }
`;
