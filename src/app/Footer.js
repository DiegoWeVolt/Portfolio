const { Flex, Text } = require("@chakra-ui/react")

const Footer = () => {
    return (
        <Flex justify="space-between" bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)" padding="25px">
            <Text>Copyright 2023 - DahMotta Tecnologia - Electronics Company</Text>

            <Text>contato@dahmotta.com.br</Text>
        </Flex>
    )
}

export default Footer
