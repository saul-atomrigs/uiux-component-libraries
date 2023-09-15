import { useState } from "react";
import styled from '@emotion/styled'
import SwipeablePlaylist from "./swipeable-playlist";
import {playlist} from "./swipeable-playlist/data";

const Box = styled.div`
  width: 100vw;
  max-width: 500px;
  height: 70dvh;
  border-radius: 12px;
  box-shadow: 0 0 50px 1px rgba(255, 255, 255, 0.1);
  background: #2b2b2b;
  overflow: hidden;
`;

function App() {
  const [myPlaylist, setMyPlaylist] = useState(playlist);

  const handleDelete = (id: number) => {
    setMyPlaylist(myPlaylist.filter((music) => music.id !== id));
  };

  return (
    <Box>
      <SwipeablePlaylist playlist={myPlaylist} onRequestDelete={handleDelete} />
    </Box>
  )
}

export default App;
