import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex color="#FFF" justify="center" bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)" padding="25px">
            <Flex
                align="center"
                flexDirection={{ base: "column", md: "row" }}
                maxW="1500px"
                w="full"
                justifyContent="space-between">
                <Text marginTop={{ base: "10px", md: 0 }}>diegosantosmtd@gmail.com</Text>
            </Flex>
        </Flex>
    )
}

export default Footer
