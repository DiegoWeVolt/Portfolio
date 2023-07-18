const { Flex, Text, Grid, GridItem, Image, Box } = require("@chakra-ui/react")

const Cases = () => {
    return (
        <Flex flexDir="column" bgColor="#101010" padding="30px" mt="50px" w="full" h="full">
            <Text
                fontSize={{ base: "20px", lg: "40px" }}
                backgroundClip="text"
                bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                fontWeight="bold">
                Cases
            </Text>
            <Text marginBottom="20px">
                Projetos que tiram nosso ar e fazem nossos olhos brilharem de orgulho por cumprir nossa missão.
            </Text>

            <Flex overflow="hidden" overflowX="scroll" gap={5}>
                <Box minW="250px" minH="250px">
                    <Image
                        borderRadius="15px"
                        objectFit="cover"
                        src="DahMotta_Imperium_caixa.jpg"
                        alt="DahMotta_Imperium_caixa"
                    />
                </Box>

                <Box minW="250px" minH="250px">
                    <Image
                        borderRadius="15px"
                        objectFit="cover"
                        src="DahMotta_Imperium_caixa.jpg"
                        alt="DahMotta_Imperium_caixa"
                    />
                </Box>
                <Box minW="250px" minH="250px">
                    <Image
                        borderRadius="15px"
                        objectFit="cover"
                        src="DahMotta_Imperium_caixa.jpg"
                        alt="DahMotta_Imperium_caixa"
                    />
                </Box>
                <Box minW="250px" minH="250px">
                    <Image
                        borderRadius="15px"
                        objectFit="cover"
                        src="DahMotta_Imperium_caixa.jpg"
                        alt="DahMotta_Imperium_caixa"
                    />
                </Box>
                <Box minW="250px" minH="250px">
                    <Image
                        borderRadius="15px"
                        objectFit="cover"
                        src="DahMotta_Imperium_caixa.jpg"
                        alt="DahMotta_Imperium_caixa"
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Cases
