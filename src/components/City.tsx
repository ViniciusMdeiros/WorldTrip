import { Flex, Image, Text } from "@chakra-ui/react";

interface CityProps {
    city: string;
}

const cities = {
    londres: {
        name: "Londres",
        country: "Reino Unido",
        img: "/images/londres.svg",
        flag: "/images/reino_unido.svg",
    },
    paris: {
        name: "Paris",
        country: "Franca",
        img: "/images/paris.svg",
        flag: "/images/franca.svg",
    },
    roma: {
        name: "Roma",
        country: "Italia",
        img: "/images/roma.svg",
        flag: "/images/italia.svg",
    },
    praga: {
        name: "Praga",
        country: "Republica Tcheca",
        img: "/images/praga.svg",
        flag: "/images/republica_tcheca.svg",
    },
    amsterda: {
        name: "Amsterda",
        country: "Holanda",
        img: "/images/amsterda.svg",
        flag: "/images/holanda.svg",
    },
}

export default function City({city}: CityProps){
    const cityData = cities[city];

    return (
        <Flex
            flexDir="column"
            align="top"
            justify="top"
            h={279}
            w={256}
            borderColor="highlight"
            borderStyle="solid"
            borderWidth={1}
            borderRadius="md"
        >
            <Image
                src={cityData.img}
                alt={cityData.name}
                w={256}
                h={173}
            />
            <Flex
                justifyContent="space-between"
                margin={5}
            >
                <Flex
                    flexDir="column"
                >
                    <Text
                        fontWeight="semibold"
                        color="heading_text_dark"
                        fontSize={20}
                    >
                        {cityData.name}
                    </Text>
                    <Text
                        fontWeight="medium"
                        color="info_dark"
                        fontSize={16}
                    >
                        {cityData.country}
                    </Text>
                </Flex>
                <Flex
                    align="flex-end"
                >
                    <Image
                        src={cityData.flag}
                        alt={cityData.country}
                        w={30}
                        h={30}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}