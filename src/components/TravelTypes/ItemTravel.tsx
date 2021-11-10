import { Text, Box, Image, Stack } from '@chakra-ui/react';

interface ItemTravelProps {
  imageUrl: string;
  name: string;
}

export function ItemTravel({ imageUrl, name }: ItemTravelProps) {
  return (
    <Box>
      <Stack spacing="6">
        <Image src={imageUrl} alt={name} />
        <Text fontWeight="semibold" color="darkHeading" align="center">{name}</Text>
      </Stack>
    </Box>
  );
}