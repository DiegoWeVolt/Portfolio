"use client";

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
  Textarea,
} from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex padding="15px">
      <Flex w="full" justify="space-between">
        <Flex align="center">
          <Image src="/dahmotta.svg" alt="logo" width="100px" />
          <Flex flexDir="column">
            <Text ml="15px" fontWeight="bold" fontSize="50px" color="#FFF">
              DahMotta
            </Text>
            <Text
              marginTop="-15px"
              ml="15px"
              fontWeight="bold"
              s
              color="#FFF"
              fontSize="18px"
            >
              Tecnologia da Informação
            </Text>
          </Flex>
        </Flex>
        <Flex align="center">
          <Button
            fontSize="18px"
            leftIcon={
              <Image
                src="/right_arrow.svg"
                alt="contato"
                width="15px"
                h="12px"
              />
            }
            variant="unstyled"
            color="#FFF"
          >
            Sobre
          </Button>
          <Button
            fontSize="18px"
            leftIcon={
              <Image
                src="/right_arrow.svg"
                alt="contato"
                width="15px"
                h="12px"
              />
            }
            marginX="20px"
            variant="unstyled"
            color="#FFF"
          >
            Servicos
          </Button>
          <Button
            fontSize="18px"
            leftIcon={
              <Image src="/HeadPhone.svg" alt="contato" width="18px" h="15px" />
            }
            variant="unstyled"
            color="#FFF"
            onClick={onOpen}
          >
            Contato
          </Button>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            <Flex flexDir="column">
              <Flex align="center">
                <Image
                  src="/dahmotta.svg"
                  alt="logo"
                  width="50px"
                  marginRight="10px"
                />
                <Text>FALE CONOSCO</Text>
              </Flex>
              <Text fontSize="16px" marginTop="20px" textAlign="center">
                Preencha o seguinte formulário e nos envie suas dúvidas ou
                sugestões, as quais responderemos o mais breve possível.
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input />

              <FormLabel marginTop="10px">E-mail</FormLabel>
              <Input type="email" />

              <FormLabel marginTop="10px">Telefone</FormLabel>
              <Input name="telefone" />

              <FormLabel marginTop="10px">Mensagem</FormLabel>
              <Textarea placeholder="Digite aqui..." />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" color="green">
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
