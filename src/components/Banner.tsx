import { Flex, SimpleGrid, Box, Text, Stack} from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      bgImage="url('/images/Background.png')"
      w="100%"
      h={335}
      maxWidth={1480}
      align="center"
      p="8"
    >
      <SimpleGrid columns={2} spacing="44">
        <Flex as="div" direction="column" justify="center" color="white" w="100%" ml="8">
          <Stack spacing="6">
            <Text fontSize="36px" fontWeight="500">5 Continentes, infinitas possibilidades.</Text>
            <Text fontSize="20px" fontWeight="normal">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Stack>
        </Flex> 

        <Box
          bgImage="url('/images/Airplane.png')"
          bgRepeat="no-repeat"
          h={271}
          w={418}
          mt="28"
        />
      </SimpleGrid>
    </Flex> 
  );
}