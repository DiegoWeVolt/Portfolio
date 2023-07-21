const { Flex, Text, Grid, GridItem, Image, Box } = require("@chakra-ui/react")

const Cases = () => {
    return (
        <Flex bgColor="#101010" padding="30px" mt="50px" w="full" h="full">
            <Flex w="full" flexDir="column" marginX="auto" maxW="1500px">
                <Text
                    fontSize={{ base: "20px", lg: "40px" }}
                    backgroundClip="text"
                    bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                    fontWeight="bold"
                    marginBottom="20px">
                    Cases
                </Text>
                <Text color="#FFF" marginBottom="20px">
                    Projetos que tiram nosso ar e fazem nossos olhos brilharem de orgulho por cumprir nossa missão.
                </Text>

                <Flex overflow="hidden" gap={{ base: "5", lg: "5" }} overflowX="auto" paddingBottom="10px">
                    <Box minW="250px" minH="250px">
                        <Image
                            borderRadius="15px"
                            objectFit="cover"
                            src="DahMotta_Imperium_caixa.jpg"
                            alt="DahMotta_Imperium_caixa"
                        />
                    </Box>

                    <Box minW="250px" minH="250px">
                        <Image borderRadius="15px" objectFit="cover" src="caixinha.jpg" alt="caixinha.jpg" />
                    </Box>
                    <Box minW="250px" minH="250px">
                        <Image
                            borderRadius="15px"
                            objectFit="cover"
                            src="Imperium_vs_Timer.png"
                            alt="Imperium_vs_Timer.png"
                        />
                    </Box>
                    <Box minW="250px" minH="250px">
                        <Image borderRadius="15px" objectFit="cover" src="pcbdestacadas.jpg" alt="pcbdestacadas.jpg" />
                    </Box>
                    <Box minW="250px" minH="250px">
                        <Image
                            borderRadius="15px"
                            objectFit="cover"
                            src="Imperium_Android_AddTimer.png"
                            alt="Imperium_Android_AddTimer.png"
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Cases
