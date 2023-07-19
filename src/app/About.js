const { Flex, Text, Grid, GridItem, Image, Box } = require("@chakra-ui/react")

const About = () => {
    return (
        <Flex id="sobre" flexDir="column" bgColor="#101010" color="#FFF" padding="30px" w="full" h="full">
            <Text
                fontSize={{ base: "20px", lg: "40px" }}
                backgroundClip="text"
                bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                fontWeight="bold">
                Sobre
            </Text>
            <Text marginBottom="20px">
                A DahMotta Tecnologia da Informação LTDA é uma empresa de destaque no setor, fornecendo soluções
                personalizadas para atender às necessidades específicas de nossos clientes desde 2010. Nossa equipe de
                especialistas altamente qualificados oferece serviços abrangentes de consultoria, desenvolvimento de
                firmware, hardware, software e aplicativos, garantindo soluções totalmente integradas para impulsionar o
                sucesso dos projetos tecnológicos. <br /> <br />
                Nosso compromisso com a qualidade e a excelência é evidente em cada projeto que realizamos. Trabalhamos
                em estreita colaboração com nossos clientes para entender seus objetivos e desafios, oferecendo soluções
                tecnológicas inovadoras e eficientes que agregam valor aos seus negócios. <br /> <br />
                Na DahMotta, acreditamos que cada projeto é único e requer uma abordagem personalizada. Nossa equipe de
                especialistas está preparada para enfrentar os desafios mais complexos, combinando experiência técnica
                com conhecimento de mercado para entregar resultados excepcionais. Utilizamos as últimas tendências
                tecnológicas e adotamos as melhores práticas da indústria para garantir soluções de ponta que atendam às
                necessidades presentes e futuras de nossos clientes. <br /> <br />
                Nossa reputação é construída com base na confiança, dedicação e satisfação do cliente. Temos o orgulho
                de sermos uma empresa orientada para resultados, comprometida em superar as expectativas de nossos
                clientes em cada projeto. Nosso objetivo é estabelecer parcerias de longo prazo, fornecendo suporte
                contínuo e soluções tecnológicas de alto nível. <br />
                Se você está procurando uma empresa confiável, inovadora e comprometida em impulsionar o sucesso de seus
                projetos tecnológicos, a DahMotta Tecnologia da Informação LTDA é a escolha certa. Entre em contato
                conosco hoje mesmo e descubra como podemos ajudar a transformar suas ideias em realidade.
                <br /> <br />
                Desenvolvemos firmware, hardware, software e aplicativos para solucoes completamente integradas as
                necessidades do cliente. <br />
                Um de nossos produtos é o mini-controlador Wi-Fi para o acionamento de cargas de baixa potencia. <br />
                Pode substituir os antigos timers mecanicos e tambem os novos timers eletronicos que utilizam botoes e
                uma interface complicada para o usuario. <br />
                <br />
            </Text>
        </Flex>
    )
}

export default About
