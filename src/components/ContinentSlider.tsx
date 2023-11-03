import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"

import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import Link from "next/link";
import { useEffect } from "react";

SwiperCore.use([Navigation]);



export default function ContinentSlider(){
    
    return (
        <Flex 
            w={[375, 375, 1240, 1240]}
            h={[250, 250, 450, 450]}
        >
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <Link
                        href="/europe"
                        passHref
                    >
                        <Flex
                            h="100%"
                            bgImage="/images/continente_europa.svg"
                            justify="center"
                            alignItems="center"
                            flexDir="column"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize={48}
                                color="heading_text"
                            >
                                Europa
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize={24}
                                color="heading_text"
                            >
                                O continente mais antigo.
                            </Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link
                        href="/europe"
                        passHref
                    >
                        <Flex
                            h="100%"
                            bgImage="/images/America.jpg"
                            bgSize="cover"
                            bgPosition={"center"}
                            justify="center"
                            alignItems="center"
                            flexDir="column"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize={48}
                                color="heading_text"
                            >
                                America
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize={24}
                                color="heading_text"
                            >
                                O continente da Disney.
                            </Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}