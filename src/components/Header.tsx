import { Flex, Image } from "@chakra-ui/react";

export default function Header(){
    return (
        <Flex
            h={[50, 50, 100, 100]}
            w="100%"
            justify="center"
            align="center"
        >
            <Image src="/images/Logo.svg" alt="Logo" h={["20px", "20px", "45px", "45px"]} />
        </Flex>
    )
}