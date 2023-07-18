import { Flex, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex padding="30px" mt="50px" mb="30px">
            <Text lineHeight={{base: "40px", lg: "118px"}} fontSize={{base: '40px', lg: '100px'}} backgroundClip="text" bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)" fontWeight="bold">SOLUÇÕES<br/>INTELIGENTES</Text>
        </Flex>
    )
}

export default Header
