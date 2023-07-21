const { Flex, Text } = require("@chakra-ui/react")

const Footer = () => {
    return (
        <Flex color="#FFF" justify="center" bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)" padding="25px">
            <Flex
                align="center"
                flexDir={{ base: "Column", md: "row" }}
                maxW="1500px"
                w="full"
                justifyContent="space-between">
                <Text>Copyright 2023 - DahMotta Tecnologia - Electronics Company</Text>

                <Text marginTop={{ base: "10px", md: 0 }}>contato@dahmotta.com.br</Text>
            </Flex>
        </Flex>
    )
}

export default Footer
