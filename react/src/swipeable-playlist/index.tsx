import { useEffect, useState } from 'react';
import { ListBox } from './styled';
import ListItem from './ListItem';
import { AnimatePresence } from 'framer-motion';
import type { MusicItem } from './types';

type SwipeablePlaylistProp = {
  playlist: Array<MusicItem>;
  onRequestDelete: (id: number) => void;
};

const SwipeablePlaylist = ({ playlist, onRequestDelete }: SwipeablePlaylistProp) => {
  const [playlistData, setPlaylistData] = useState(playlist);

  useEffect(() => {
    setPlaylistData([...playlist]);
  }, [playlist]);

  return (
    <ListBox axis="y" values={playlistData} onReorder={setPlaylistData}>
      <AnimatePresence>
        {playlistData.map((value) => (
          <ListItem key={value.id} value={value} onRequestDelete={onRequestDelete} />
        ))}
      </AnimatePresence>
    </ListBox>
  );
};

export default SwipeablePlaylist;
