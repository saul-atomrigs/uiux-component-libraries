import styled from '@emotion/styled';

import { Reorder } from 'framer-motion';

const Box = styled.div`
  width: 100vw;
  max-width: 500px;
  height: 70dvh;
  border-radius: 12px;
  box-shadow: 0 0 50px 1px rgba(255, 255, 255, 0.1);
  background: #2b2b2b;
  overflow: hidden;
  padding: 1rem;
`;

const ListBox = styled(Reorder.Group)`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1rem 2rem;
`;

export { Box, ListBox };
