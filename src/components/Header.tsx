import { Flex, Text, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h={100}
      mx="auto"
      align="center"
      justify="center"
      py="12"
    >
      <Image src="/images/Logo.png" alt="worldtrip" />
    </Flex>
  );
}