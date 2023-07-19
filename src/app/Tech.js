const { Flex, Text, Grid, GridItem, Image, Box } = require("@chakra-ui/react")

const Tech = () => {
    return (
        <Flex flexDir="column" bgColor="#101010" color="#FFF" padding="30px" w="full" h="full">
            <Text
                marginBottom="20px"
                fontSize={{ base: "20px", lg: "40px" }}
                backgroundClip="text"
                bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                fontWeight="bold">
                Tecnologias
            </Text>

            <Flex overflow="hidden" gap={{ base: "2", lg: "5" }} overflowX="scroll">
                <Box w="90px" h="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/React_Native_Developers.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/java_developers.svg"
                        alt="java developers.svg"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/Python_developers.svg"
                        alt="Python_developers"
                    />
                </Box>

                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/React_Developers.svg"
                        alt="React_Developers"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/javascript_developers.svg"
                        alt="javascript Developers.svg"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/PHP_developers.svg"
                        alt="PHP_developers"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/Flutter_developers.svg"
                        alt="Flutter_developers"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/aws_developers.svg"
                        alt="aws_developers"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/GoogleClouddevelopers.svg"
                        alt="GoogleClouddevelopers"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/nodejs_developers.svg"
                        alt="nodejs_developers"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/Vuejs_Developers.svg"
                        alt="Vuejs_Developers"
                    />
                </Box>
                <Box w="90px" h="90px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/Angular_full_color_logo.svg.png"
                        alt="Vuejs_Developers"
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Tech
