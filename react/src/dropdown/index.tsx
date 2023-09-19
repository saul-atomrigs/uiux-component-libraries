import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

export default function DropDown() {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null); // 내부 버튼 영역
  const contentRef = useRef<HTMLDivElement>(null); // 내부 콘텐츠 영역

  useEffect(() => {
    const handleInteraction = (e: Event) => {
      const target = e.target as HTMLElement;

      if (!containerRef?.current || !contentRef?.current) return;

      if (!containerRef.current.contains(target) && !contentRef.current.contains(target)) {
        // 내부 영역이 아닐 경우 실행
        setShow(false);
      }
    };

    document.addEventListener('click', handleInteraction);
    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, [containerRef, contentRef]);

  return (
    <Container ref={containerRef}>
      <button onClick={() => setShow(true)}>🍡 탕후루 과일 추가</button>
      {show && (
        <Portal id='dropdown'>
          <Layer />
          <Content ref={contentRef}>
            <Item>🍉 수박</Item>
            <Item>🍇 포도</Item>
            <Item>🍓 딸기</Item>
          </Content>
        </Portal>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Portal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 50px 1px rgba(255, 255, 255, 0.1);
`;

const Item = styled.div`
  padding: 12px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;
