import { Box, Divider, Flex } from '@chakra-ui/react'
import Banner from '../components/Banner'
import ContinentSlider from '../components/ContinentSlider'
import Header from '../components/Header'
import TravelTypes from '../components/TravelTypes'

export default function Home() {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      w="100vw"
    >
      <Header />
      <Banner />
      <TravelTypes />
      <Divider w={90} />
      <Box
        mt={10}
        justifyContent="center"
        textAlign="center"
        fontSize={[20, 20, 36, 36]}
        fontWeight="medium"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Box>
      <ContinentSlider />
    </Flex>
  )
}
