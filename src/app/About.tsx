import React from "react"

import { Flex, Text } from "@chakra-ui/react"

const About = () => {
    return (
        <Flex id="About" bgColor="#101010" color="#FFF" padding="30px" w="full" h="full">
            <Flex flexDir="column" marginX="auto" maxW="1500px">
                <Text
                    fontSize={{ base: "20px", lg: "40px" }}
                    backgroundClip="text"
                    bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                    fontWeight="bold"
                    marginBottom="20px">
                    About
                </Text>
                <Text marginBottom="20px">
                    <br />
                    <br />
                </Text>
            </Flex>
        </Flex>
    )
}

export default About
