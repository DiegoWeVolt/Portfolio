"use client"
import { useState, useCallback } from "react"
import {
    Button,
    Flex,
    Image,
    Text,
    Modal,
    ModalContent,
    ModalHeader,
    FormControl,
    ModalBody,
    FormLabel,
    ModalCloseButton,
    useDisclosure,
    Input,
    Grid,
    GridItem,
    Textarea,
} from "@chakra-ui/react"
import Header from "./Header"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import Cases from "./Cases"
import About from "./About"
import Footer from "./Footer"
import Tech from "./Tech"

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function sendEmail(e) {
        e.preventDefault()
        if (name === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos!")
        } else {
            window.open(`mailto:contato@dahmotta.com?subject=${name} - ${email}&body=${mensagem}`, "_blank")
            onClose()
        }
    }

    const particlesInit = useCallback(async (engine) => {
        console.log(engine)
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, [])

    return (
        <Flex flexDir="column">
            <Flex marginX="auto" maxW="1500px" padding="30px" w="full" justify="space-between">
                <Flex align="center">
                    <Image src="/dahmotta.svg" alt="logo" width={{ base: "50px", lg: "75px" }} />
                    <Flex flexDir="column" ml="15px">
                        <Text fontWeight="bold" fontSize={{ base: "14px", lg: "30px" }} color="#FFF">
                            DahMotta
                        </Text>
                        <Text fontWeight="bold" color="#FFF" fontSize={{ base: "14px", lg: "18px" }}>
                            Tecnologia da Informação
                        </Text>
                    </Flex>
                </Flex>

                <Flex flexDir={{ base: "column", lg: "row" }} align="center">
                    <Button
                        as={"a"}
                        height="30px"
                        href="#servicos"
                        fontSize={{ base: "14px", lg: "18px" }}
                        leftIcon={<Image src="/right_arrow.svg" alt="contato" width="15px" h="12px" />}
                        variant="unstyled"
                        color="#FFF">
                        Serviços
                    </Button>
                    <Button
                        height="30px"
                        as={"a"}
                        href="#sobre"
                        fontSize={{ base: "14px", lg: "18px" }}
                        leftIcon={<Image src="/right_arrow.svg" alt="contato" width="15px" h="12px" />}
                        variant="unstyled"
                        marginX="20px"
                        color="#FFF">
                        Sobre
                    </Button>

                    <Button
                        height="30px"
                        fontSize={{ base: "14px", lg: "18px" }}
                        leftIcon={<Image src="/HeadPhone.svg" alt="contato" width="18px" h="15px" />}
                        variant="unstyled"
                        color="#FFF"
                        onClick={onOpen}>
                        Contato
                    </Button>
                </Flex>
            </Flex>

            <Header />

            <Flex marginX="auto" maxW="1500px" padding="30px" flexDir="column">
                <Text
                    fontSize={{ base: "20px", lg: "40px" }}
                    backgroundClip="text"
                    bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                    fontWeight="bold"
                    marginBottom="20px">
                    Aviso
                </Text>

                <Text color="#FFF">
                    Caros clientes, <br /> <br />É com grande gratidão e emoção que nos dirigimos a vocês hoje. Durante
                    mais de 12 anos, tivemos o privilégio de servir vocês como uma empresa de tecnologia comprometida em
                    oferecer soluções inovadoras e serviços excepcionais. Cada conquista, cada marco alcançado, foi
                    possível graças ao seu apoio incondicional. Foi a confiança depositada em nós que nos impulsionou a
                    buscar sempre o melhor e a elevar nossos padrões de excelência. <br />
                    <br /> Com alegria, olhamos para trás e lembramos de todas as parcerias valiosas que estabelecemos
                    ao longo dos anos. Foram momentos de colaboração, compartilhamento de conhecimento e crescimento
                    conjunto. Juntos, alcançamos resultados extraordinários e superamos desafios que nos tornaram mais
                    fortes. No entanto, todas as jornadas têm seu ponto final, e é com misto de emoções que anunciamos o
                    encerramento de nossas atividades no final deste mês. A decisão não foi fácil, mas sabemos que é o
                    caminho certo para direcionar nossos esforços para novos horizontes e oportunidades emocionantes.
                    <br /> <br />
                    Gostaríamos de expressar nosso profundo agradecimento a cada um de vocês, nossos estimados clientes.
                    Foi uma honra servi-los e fazer parte do crescimento de seus negócios. Suas necessidades e
                    aspirações foram sempre nossa prioridade, e seu apoio constante nos motivou a alcançar nossos
                    melhores resultados. Embora nossos caminhos possam se separar agora, levaremos com carinho todas as
                    lembranças e conexões que construímos juntos. O sucesso que compartilhamos é resultado de uma
                    parceria verdadeira, e temos certeza de que os laços que formamos continuarão a influenciar nossas
                    vidas e trajetórias futuras.
                    <br /> <br />
                    Mais uma vez, obrigado pelo privilégio de tê-los como nossos clientes. Desejamos a todos vocês um
                    futuro brilhante e repleto de realizações. Mantenham-se inspirados, inovadores e nunca deixem de
                    acreditar no poder da tecnologia para transformar o mundo.
                    <br /> <br />
                    Com sincera gratidão, <br />
                    <br />
                    Equipe da DahMotta
                </Text>
            </Flex>

            <Flex marginX="auto" maxW="1500px" id="servicos" padding="30px">
                <Grid templateColumns={{ base: "repeat(1, 5fr)", lg: "repeat(3, 5fr)" }} gap={5}>
                    <GridItem w="100%" h="100%">
                        <Text
                            backgroundClip="text"
                            bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                            fontSize="50px"
                            fontWeight="bold"
                            marginBottom="20px">
                            Serviços
                        </Text>
                        <Text textAlign="initial" fontSize="15px" color="#FFF">
                            Não se trata apenas de oferecer uma ampla gama de serviços; é preciso ter conhecimento
                            técnico e analítico especializado para fornecer uma solução abrangente e personalizada,
                            atendendo a todas as necessidades do seu negócio, desde o início até o fim.
                        </Text>
                    </GridItem>

                    <GridItem padding="20px" w="100%" h="100%">
                        <Image src="/svgexport-12.svg" alt="sistemas" />
                        <Text fontSize="18px" marginY="15px" color="#FFF">
                            Sistemas
                        </Text>
                        <Text fontSize="15px" color="#FFF">
                            Muitas empresas possuem processos únicos e esse é o diferencial competitivo, assim os SAAS
                            não atendem e forçam a adaptação. Nós fazemos o desenho do processo e desenvolvemos o
                            software exclusivamente para você.
                        </Text>
                    </GridItem>

                    <GridItem padding="20px" w="100%" h="100%">
                        <Image src="/svgexport-13.svg" alt="mobile" />
                        <Text fontSize="18px" marginY="15px" color="#FFF">
                            Aplicativos
                        </Text>
                        <Text fontSize="15px" color="#FFF">
                            Aplicativos Tanto para oferecer mobilidade para sua solução ou lançar uma nova e potencial
                            Startup. Estamos aqui para entender e levantar os requisitos, desenhar e desenvolver a idéia
                            para, no fim, você usufruir dessa magnífica criação.
                        </Text>
                    </GridItem>

                    <GridItem padding="20px" w="100%" h="100%" overflow="hidden" borderRadius="15px">
                        <Image src="/bgServicos.jpg" alt="bgServicos.jpg" />
                    </GridItem>

                    <GridItem padding="20px" w="100%" h="100%">
                        <Image src="/svgexport-14.svg" width="50px" alt="web" size="20px" />
                        <Text fontSize="18px" marginY="15px" color="#FFF">
                            E-commerce
                        </Text>
                        <Text fontSize="15px" color="#FFF">
                            Pensa em vender online e as soluções prontas te limitam? Prazer, conosco sua idéia inovadora
                            será enfim tirada do papel e lançada para seus clientes, seja ela IOT ou IA, conte conosco..
                        </Text>
                    </GridItem>

                    <GridItem padding="20px" w="100%" h="100%">
                        <Image src="/svgexport-15.svg" width="50px" alt="web" />
                        <Text fontSize="18px" marginY="15px" color="#FFF">
                            Hardware
                        </Text>
                        <Text fontSize="15px" color="#FFF">
                            Nossa abordagem única de desenvolvimento de hardware é baseada em uma combinação de
                            expertise técnica e criatividade. Trabalhamos em estreita colaboração com nossos clientes
                            para entender suas metas e requisitos específicos, a fim de projetar e desenvolver soluções
                            de hardware sob medida, que atendam às suas expectativas e superem suas necessidades.
                        </Text>
                    </GridItem>
                </Grid>
            </Flex>

            <Cases />

            <About />

            <Tech />

            <Footer />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent color="black">
                    <ModalHeader>
                        <Flex flexDir="column">
                            <Flex align="center">
                                <Image src="/dahmotta.svg" alt="logo" width="50px" marginRight="10px" />
                                <Text>FALE CONOSCO</Text>
                            </Flex>
                            <Text fontSize="16px" marginTop="20px" textAlign="center">
                                Preencha o seguinte formulário e nos envie suas dúvidas ou sugestões, as quais
                                responderemos o mais breve possível.
                            </Text>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" onChange={(e) => setName(e.target.value)} value={name} />

                            <FormLabel marginTop="10px">E-mail</FormLabel>
                            <Input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

                            <FormLabel marginTop="10px">Mensagem</FormLabel>
                            <Textarea
                                placeholder="Digite aqui..."
                                onChange={(e) => setMensagem(e.target.value)}
                                value={mensagem}
                            />
                        </FormControl>
                        <Flex marginTop="20px">
                            <Button colorScheme="gray" mr={3} onClick={onClose}>
                                Fechar
                            </Button>
                            <Button
                                // href={`mailto:contato@dahmotta.com?subject=${name} - ${email}&body=${mensagem}`}
                                variant="ghost"
                                color="green"
                                onClick={sendEmail}>
                                Enviar
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Flex opacity={0.2} zIndex={-1}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </Flex>
        </Flex>
    )
}
