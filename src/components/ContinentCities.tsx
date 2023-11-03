import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import City from "./City";

export default function ContinentCities(){
    return (
        <Flex
            flexDir="column"
            mt={20}
        >
            <Text
                fontWeight="medium"
                fontSize={[24, 24, 36, 36]}
                mb="35px"
            >
                Cidades +100
            </Text>
            {/* <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                <GridItem w='200px' h='10' bg='blue.500' />
                <GridItem w='200px' h='10' bg='blue.500' />
                <GridItem w='200px' h='10' bg='blue.500' />
                <GridItem w='200px' h='10' bg='blue.500' />
                <GridItem w='200px' h='10' bg='blue.500' />
            </Grid> */}
            <Grid templateColumns={['repeat(1fr)', 'repeat(1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']} gap={6}
                h={145}
                w={[300, 300, 1160, 1160]}
            >
                <GridItem>
                    <City city="londres" />
                </GridItem>
                <GridItem>
                    <City city="paris" />
                </GridItem>
                <GridItem>
                    <City city="roma" />
                </GridItem>
                <GridItem>
                    <City city="praga" />
                </GridItem>
                <GridItem>
                    <City city="amsterda" />
                </GridItem>
            </Grid>
        </Flex>
    )
}