import styled from '@emotion/styled';

import { Reorder } from 'framer-motion';

const ListBox = styled(Reorder.Group)`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1rem 2rem;
`;

export { ListBox };
