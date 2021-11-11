import { Flex, Text } from '@chakra-ui/react';

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

        <Flex direction="column" align="center" justify="center" py="8"  color="darkHeading">
          <Text fontSize="36" fontWeight="500" lineHeight="54px">Vamos nessa</Text>
          <Text fontSize="36" fontWeight="500" lineHeight="54px">Então escolha seu continente</Text>
        </Flex>

      </Flex>
    </Flex>
  )
}
