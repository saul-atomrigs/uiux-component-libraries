import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Box, ListBox } from './styled';
import ListItem from './ListItem';
import { playlist } from './data';

export default function SwipeableList() {
  const [playlistData, setPlaylistData] = useState(playlist);

  const handleDelete = (id: number) => {
    setPlaylistData(playlistData.filter((music) => music.id !== id));
  };

  useEffect(() => {
    setPlaylistData([...playlist]);
  }, [playlist]);

  return (
    <Box>
      <ListBox axis='y' values={playlistData} onReorder={setPlaylistData}>
        <AnimatePresence>
          {playlistData.map((value) => (
            <ListItem
              key={value.id}
              value={value}
              onRequestDelete={handleDelete}
            />
          ))}
        </AnimatePresence>
      </ListBox>
    </Box>
  );
}
