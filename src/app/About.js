const { Flex, Text, Grid, GridItem, Image, Box } = require("@chakra-ui/react")

const About = () => {
    return (
        <Flex id="sobre" flexDir="column" bgColor="#101010" padding="30px" w="full" h="full">
            <Text
                fontSize={{ base: "20px", lg: "40px" }}
                backgroundClip="text"
                bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                fontWeight="bold">
                Sobre
            </Text>
            <Text marginBottom="20px">
                A DahMotta Tecnologia da Informacao LTDA nasceu em 2010 atraves da prestacao de servicos de consultoria
                para viabilidade de projetos.
                <br />
                Desenvolvemos firmware, hardware, software e aplicativos para solucoes completamente integradas as
                necessidades do cliente. <br />
                Um de nossos produtos é o mini-controlador Wi-Fi para o acionamento de cargas de baixa potencia. <br />
                Pode substituir os antigos timers mecanicos e tambem os novos timers eletronicos que utilizam botoes e
                uma interface complicada para o usuario. <br />
                <br />
                Dentre as funcionalidades: <br />
            </Text>

            <Flex paddingLeft="35px">
                <ul>
                    <li>Configuracao via WiFi 2.4GHz (HotSpot) - perfeito para lugares de dificil acesso.</li>
                    <li>Nao tem necessidade de estar conectado a uma rede wifi local.</li>
                    <li>
                        Bateria interna para manter o controle da data/hora, mesmo se tiver queda de luz Acionamentos
                        configuraveis por dia da semana e horarios.
                    </li>
                    <li>Dimensoes: 44x51x27 - perfeita para pequenos lugares. Alimentacao: 110V-220V</li>
                </ul>
            </Flex>
        </Flex>
    )
}

export default About
