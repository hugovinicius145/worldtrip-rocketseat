import { Box, Text, Flex } from '@chakra-ui/react';

interface SlideProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function Slide({ title, description, imageUrl }: SlideProps) {
  return (
    <Box 
      bgImage={`url('${imageUrl}')`}      
      bgRepeat="no-repeat"
      h={450}
      w={1240}
      as="div"
      cursor="pointer"
    >
      <Flex direction="column" align="center" justifyContent="center" h="100%" color="lightHeading" as="div">
        <Text fontWeight="semibold" fontSize="48">{title}</Text>
        <Text fontWeight="semibold" fontSize="24">{description}</Text>
      </Flex>                
    </Box>
  );
}