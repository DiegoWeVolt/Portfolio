import { Flex, Text, Image, Box } from "@chakra-ui/react"

const Technology = () => {
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
                Technologies
            </Text>

            <Flex justifyContent="space-between" overflow="hidden" gap={{ base: "2", lg: "5" }} overflowX="auto">
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="icons/Technology/nextjs.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="icons/Technology/expo.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>

                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="icons/Technology/storybook-icon.svg"
                        alt="React_Developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="icons/Technology/typescript-icon.svg"
                        alt="React_Developers"
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Technology
