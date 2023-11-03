import { Flex, HStack, Image, Text } from "@chakra-ui/react";

export default function TravelTypes(){
    return (
        <HStack
            h={[59, 59, 145, 145]}
            w={[343, 343, 490, 490]}
            justify="space-between"
        >
            <Flex
                flexDir="column"
                align="top"
                justify="top"
                h="100%"
            >
                <Text
                    fontWeight="semibold"
                    color="highlight"
                    justifyContent="center"
                    align="center"
                    fontSize={[24, 24, 48, 48]}
                >
                    50
                </Text>
                <Text
                    fontWeight="semibold"
                    color="heading_text_dark"
                    justifyContent="center"
                    align="center"
                    fontSize={[18, 18, 24, 24]}
                >
                    paises
                </Text>
            </Flex>
            <Flex
                flexDir="column"
                align="top"
                justify="top"
                h="100%"
            >
                <Text
                    fontWeight="semibold"
                    color="highlight"
                    justifyContent="center"
                    align="center"
                    fontSize={[24, 24, 48, 48]}
                >
                    60
                </Text>
                <Text
                    fontWeight="semibold"
                    color="heading_text_dark"
                    justifyContent="center"
                    align="center"
                    fontSize={[18, 18, 24, 24]}
                >
                    linguas
                </Text>
            </Flex>
            <Flex
                flexDir="column"
                align="top"
                justify="top"
                h="100%"
            >
                <Text
                    fontWeight="semibold"
                    color="highlight"
                    justifyContent="center"
                    align="center"
                    fontSize={[24, 24, 48, 48]}
                >
                    27
                </Text>
                <Text
                    fontWeight="semibold"
                    color="heading_text_dark"
                    justifyContent="center"
                    align="center"
                    fontSize={[18, 18, 24, 24]}
                >
                    cidades +100
                </Text>
            </Flex>
        </HStack>
    )
}