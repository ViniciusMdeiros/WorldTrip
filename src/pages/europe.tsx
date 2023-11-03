import { Box, Divider, Flex, Stack } from '@chakra-ui/react'
import BannerContinent from '../components/BannerContinent'
import ContinentCities from '../components/ContinentCities'
import ContinentInfo from '../components/ContinentInfo'
import Header from '../components/Header'

export default function Europe() {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      w="100vw"
    >
      <Header />
      <BannerContinent />
      <Stack
        direction={["column", "column", "row", "row"]}
      >
        <Box
            mt={10}
            justifyContent="center"
            textAlign="unset"
            fontSize={[14, 14, 24, 24]}
            w={[343, 343, 600, 600]}
        >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Box>
        <ContinentInfo />
      </Stack>
      <ContinentCities />
    </Flex>
  )
}
