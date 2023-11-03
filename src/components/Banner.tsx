import { Flex, Image, Text } from "@chakra-ui/react";

export default function Banner(){
    return (
        <Flex
            h={[163, 163, 368, 368]}
            backgroundImage="url('/images/Background.svg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="100%"
            justify="center"
            align="center"
        >
            <Flex
                flexDir="column"
                justify="center"
                m={10}
            >
                <Text
                    color="heading_text"
                    fontSize={[20, 20, 36, 36]}
                    fontWeight="medium"
                >
                    5 Continentes,<br />
                    infinitas possibilidades.
                </Text>
                <Text
                    color="info"
                    fontSize={[14, 14, 20, 20]}
                    w={['100%', '100%', 524, 524]}
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Flex>
            <Flex
                justify="center"
                align="center"
                display={['none','none', 'block', 'block']}
            >
                <Image
                    w={417}
                    h={270}
                    src="images/Airplane.svg"
                    alt="Aviao"
                />
            </Flex>
        </Flex>
    )
}