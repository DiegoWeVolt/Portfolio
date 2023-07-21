const { Flex, Text, Image, Box } = require("@chakra-ui/react")

const Tech = () => {
    return (
        <Flex
            justifyContent="center"
            flexDir="column"
            bgColor="transparent"
            maxW="1500px"
            color="#FFF"
            paddingY="30px"
            paddingX={{ base: "10px", md: "30px" }}
            w="full"
            h="full"
            marginX="auto">
            <Text
                marginBottom="20px"
                fontSize={{ base: "20px", lg: "40px" }}
                backgroundClip="text"
                bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                fontWeight="bold">
                Tecnologias
            </Text>

            <Flex justifyContent="space-between" overflow="hidden" gap={{ base: "2", lg: "5" }} overflowX="auto">
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/javascript_developers.svg"
                        alt="javascript Developers.svg"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/java_developers.svg"
                        alt="java developers.svg"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/Python_developers.svg"
                        alt="Python_developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/PHP_developers.svg"
                        alt="PHP_developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/React_Native_Developers.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>

                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/React_Developers.svg"
                        alt="React_Developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/nodejs_developers.svg"
                        alt="nodejs_developers"
                    />
                </Box>

                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/aws_developers.svg"
                        alt="aws_developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="programas-svg/GoogleClouddevelopers.svg"
                        alt="GoogleClouddevelopers"
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Tech
