import { Flex, Text, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Slide } from '../components/Slide';

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} mx="auto" direction="column" align="center">
        <Banner />
        <TravelTypes />

        <Box 
          width={90}
          height={0.5}
          bg="darkHeading"
        />

        <Flex direction="column" align="center" justify="center" py="6"  color="darkHeading">
          <Text fontSize="36" fontWeight="500" lineHeight="54px">Vamos nessa</Text>
          <Text fontSize="36" fontWeight="500" lineHeight="54px">Então escolha seu continente</Text>
        </Flex>
        
        <Flex py="16">
          <Box maxWidth={1240} maxHeight={450}>
            <Swiper navigation={true} pagination={true} >
              <SwiperSlide>
                <Slide imageUrl="/images/europa.png" title="Europa" description="O continente mais antigo." />
              </SwiperSlide>
              <SwiperSlide>
                <Slide imageUrl="/images/north-america.png" title="América do Norte" description="Uma Potẽncia." />
              </SwiperSlide>
              <SwiperSlide>
                <Slide imageUrl="/images/south-america.png" title="América do Sul" description="Um continente de muitas belezas naturais." />
              </SwiperSlide>
              <SwiperSlide>
                <Slide imageUrl="/images/africa.png" title="Africa" description="O berço da humanidade." />
              </SwiperSlide>
              <SwiperSlide>
                <Slide imageUrl="/images/asia.png" title="Asia" description="O maior dos continentes." />
              </SwiperSlide>
              <SwiperSlide>
                <Slide imageUrl="/images/oceania.png" title="Oceania" description="Novíssimo continente." />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
