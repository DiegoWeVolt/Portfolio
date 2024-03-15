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
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import Cases from "./Cases"
import About from "./About"
import Footer from "./Footer"
import Technology from "./Technology"
import React from "react"

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
        e.preventDefault()
        if (name === "" || email === "" || message === "") {
            alert("Fill in all the fields!")
        } else {
            window.open(`mailto:diegosantosmtd@gmail.com?subject=${name} - ${email}&body=${message}`, "_blank")
            onClose()
        }
    }

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, [])

    return (
        <Flex flexDir="column">
            <Flex
                flexDir={{ base: "column", lg: "row" }}
                align="center"
                marginX="auto"
                maxW="1500px"
                padding="30px"
                w="full"
                justifyContent={"flex-end"}>
                <Button
                    as={"a"}
                    height="30px"
                    href="#Experiences"
                    fontSize={{ base: "10px", lg: "12px" }}
                    variant="unstyled"
                    color="#FFF">
                    Experiences
                </Button>
                <Button
                    height="30px"
                    as={"a"}
                    href="#Technologies"
                    fontSize={{ base: "10px", lg: "12px" }}
                    variant="unstyled"
                    marginX="20px"
                    color="#FFF">
                    Technologies
                </Button>

                <Button
                    as={"a"}
                    height="30px"
                    fontSize={{ base: "10px", lg: "12px" }}
                    variant="unstyled"
                    color="#FFF"
                    onClick={onOpen}>
                    Contact
                </Button>
            </Flex>

            <Flex marginX="auto" maxW="1500px" padding="30px" flexDir="column">
                <Text
                    fontSize={{ base: "18px", lg: "28px" }}
                    backgroundClip="text"
                    color="#FFF "
                    fontWeight="bold"
                    marginBottom="20px">
                    About me
                </Text>

                <Text color="#FFF">Sobre mim</Text>
            </Flex>

            <Flex marginX="auto" maxW="1500px" id="Experiences" padding="30px">
                <Grid>
                    <GridItem w="100%" h="100%">
                        <Text
                            backgroundClip="text"
                            bgGradient="linear-gradient(125deg,#c90f55 30%,#6c3a8e)"
                            fontSize={{ base: "18px", lg: "28px" }}
                            fontWeight="bold"
                            marginBottom="20px">
                            Experience
                        </Text>

                        <Image src="icons/wevoltgreen.svg" w="90px" h="90px" alt="wevolt" />

                        <Text textAlign="initial" fontSize="15px" color="#FFF">
                            I collaborate with cross-functional teams to design and develop intuitive, responsive
                            interfaces for web and mobile applications. My responsibilities include implementing new
                            features, conducting thorough code reviews, integrating external APIs, and actively
                            participating in agile development sprints to ensure projects are delivered on time.
                            Additionally, I utilize Storybook to meticulously craft and manage a comprehensive library
                            of UI components, fostering consistency and efficiency throughout the development lifecycle.
                        </Text>
                    </GridItem>
                </Grid>
            </Flex>

            <Cases />

            <About />

            <Technology />

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
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
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
