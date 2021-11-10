import { SimpleGrid, Flex } from '@chakra-ui/react';

import { ItemTravel } from './ItemTravel';

export function TravelTypes() {
  return (
    <Flex w="100%" maxWidth={1480} justifyContent="center" align="center">
      <SimpleGrid columns={5} spacing={24} py="24">
        <ItemTravel imageUrl="/images/cocktail.png" name="vida noturna" />
        <ItemTravel imageUrl="/images/surf.png" name="praia" />
        <ItemTravel imageUrl="/images/building.png" name="moderno" />
        <ItemTravel imageUrl="/images/museum.png" name="clássico" />
        <ItemTravel imageUrl="/images/earth.png" name="e mais..." />
      </SimpleGrid>
    </Flex>
  );
}