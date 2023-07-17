"use client"
import { useState } from "react"
import {
    Button,
    Flex,
    Image,
    Text,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    FormControl,
    ModalBody,
    FormLabel,
    ModalCloseButton,
    useDisclosure,
    Input,
    Grid,
    GridItem,
    Textarea,
    Form,
} from "@chakra-ui/react"

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [telefone, setTelefone] = useState("")

    function sendEmail() {
        if (name === "" || email === "" || mensagem === "" || telefone === "") {
            alert("Preencha todos os campos!")
            return
        }
        alert("Teste")
    }

    return (
        <Flex padding="15px" flexDir="column">
            <Flex w="full" justify="space-between">
                <Flex align="center">
                    <Image src="/dahmotta.svg" alt="logo" width="100px" />
                    <Flex flexDir="column">
                        <Text ml="15px" fontWeight="bold" fontSize="50px" color="#FFF">
                            DahMotta
                        </Text>
                        <Text marginTop="-15px" ml="15px" fontWeight="bold" s color="#FFF" fontSize="18px">
                            Tecnologia da Informação
                        </Text>
                    </Flex>
                </Flex>
                <Flex align="center">
                    <Button
                        fontSize="18px"
                        leftIcon={<Image src="/right_arrow.svg" alt="contato" width="15px" h="12px" />}
                        variant="unstyled"
                        color="#FFF">
                        Sobre
                    </Button>
                    <Button
                        fontSize="18px"
                        leftIcon={<Image src="/right_arrow.svg" alt="contato" width="15px" h="12px" />}
                        marginX="20px"
                        variant="unstyled"
                        color="#FFF">
                        Servicos
                    </Button>
                    <Button
                        fontSize="18px"
                        leftIcon={<Image src="/HeadPhone.svg" alt="contato" width="18px" h="15px" />}
                        variant="unstyled"
                        color="#FFF"
                        onClick={onOpen}>
                        Contato
                    </Button>
                </Flex>
            </Flex>

            <Flex>
                <Grid templateColumns="repeat(3, 5fr)" gap={5}>
                    <GridItem padding="20px" w="100%" h="100%">
                        <Text color="#FFF" fontSize="50px" fontWeight="bold">
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

                    <GridItem padding="20px" w="100%" h="100%" />

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

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
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
                        <form onSubmit={sendEmail}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" onChange={(e) => setName(e.target.value)} value={name} />

                                <FormLabel marginTop="10px">E-mail</FormLabel>
                                <Input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

                                <FormLabel marginTop="10px">Telefone</FormLabel>
                                <Input name="telefone" onChange={(e) => setTelefone(e.target.value)} value={telefone} />

                                <FormLabel marginTop="10px">Mensagem</FormLabel>
                                <Textarea
                                    placeholder="Digite aqui..."
                                    onChange={(e) => setMensagem(e.target.value)}
                                    value={mensagem}
                                />
                            </FormControl>
                            <Flex marginTop="20px">
                                <Button colorScheme="gray" mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant="ghost" color="green" type="submit">
                                    Enviar
                                </Button>
                            </Flex>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    )
}
