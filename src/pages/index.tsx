import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} mx="auto" direction="column">
        <Banner />

        <TravelTypes />
      </Flex>
    </Flex>
  )
}
