const { Flex, Text, Grid, GridItem, Image, Box } = require("@chakra-ui/react")

const Tech = () => {
    return (
        <Flex flexDir="column" bgColor="#101010" padding="30px" w="full" h="full">
            <Text
                fontSize={{ base: "20px", lg: "40px" }}
                backgroundClip="text"
                bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                fontWeight="bold">
                Tecnologias
            </Text>
            <Text marginBottom="20px">Diego coloca as logos das tech aqui</Text>

            <Flex overflow="hidden" overflowX="scroll" gap={5}>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/React Native Developers.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/java developers.svg"
                        alt="java developers.svg"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/javascript Developers.svg"
                        alt="javascript Developers.svg"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/React Native Developers.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/React Native Developers.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Tech
