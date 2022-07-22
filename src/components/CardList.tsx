import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onToggle } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const viewImage = useCallback(
    (url: string) => {
      setSelectedImageUrl(url);
      onToggle();
    },
    [onToggle]
  );

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={viewImage} />
        ))}
      </Grid>

      <ModalViewImage
        isOpen={isOpen}
        imgUrl={selectedImageUrl}
        onClose={onToggle}
      />
    </>
  );
}
