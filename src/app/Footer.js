const { Flex, Text } = require("@chakra-ui/react")

const Footer = () => {
    return (
        <Flex
            flexDir={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
            padding="25px">
            <Text>Copyright 2023 - DahMotta Tecnologia - Electronics Company</Text>

            <Text marginTop={{ base: "10px", md: 0 }}>contato@dahmotta.com.br</Text>
        </Flex>
    )
}

export default Footer
