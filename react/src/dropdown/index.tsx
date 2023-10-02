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
        // 내부 영역을 제외한 영역(예를들어 바탕화면)을 클릭하면 드롭다운을 닫는다.
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
      {/* 이 버튼을 클릭하면 드롭다운이 열린다: */}
      <button onClick={() => setShow(true)}>🍡 탕후루 과일 추가</button>

      {/* 드롭다운 내부 내용 */}
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
  display: inline-block;
`;

const Portal = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Layer = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  width: 100%;
  max-width: 200px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 50px 1px rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

const Item = styled.div`
  padding: 12px 16px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #eee;
  }
`;