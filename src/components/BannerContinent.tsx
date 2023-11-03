import { Flex, Image, Text } from "@chakra-ui/react";

export default function BannerContinent(){
    return (
        <Flex
            h={[150, 150, 500, 500]}
            backgroundImage="url('/images/europe.svg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            w="100%"
            justify="center"
            align={["center", "center", "end", "end"]}
        >
            <Flex
                position="relative"
                w={["", "", "1000px", "1000px"]}
            >
                <Text
                    color="heading_text"
                    fontSize={[28, 28, 48, 48]}
                    fontWeight="semibold"
                >
                    Europa
                </Text>
            </Flex>
        </Flex>
    )
}