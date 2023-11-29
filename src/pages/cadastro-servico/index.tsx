import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";

export function Servicos() {
  return (
    <>
      <Sidebar>
        <Flex w="100%" my="6" maxWidth={"90%"} mx="auto" px="6">
          <Box flex="1" borderRadius={8} bg="white" p={["6", "8"]}>
            <Heading size="lg" color={"black"}>
              Criar serviço
            </Heading>

            <Divider my="6" borderColor="gray.100" />

            <Flex
              flexDirection={{
                base: "column",
                md: "row",
              }}
            >
              <FormControl w="100%">
                <Text>Nome</Text>
                <Input
                  id="nome-servico"
                  name="nome-servico"
                  placeholder="Ex: Corte simples"
                  w={{ base: "100%", md: "98%" }}
                >
                  
                </Input>
              </FormControl>
              <FormControl mt={{ base: 5, md: 0 }}>
                <Text>Valor</Text>
                <Input
                  id="valor"
                  name="valor"
                  type="number"
                  placeholder="Ex: R$ 99,00"
                  w={{ base: "100%", md: "98%" }}
                >
                  
                </Input>
              </FormControl>
            </Flex>

            <Flex mt="8" justify="flex">
              <HStack spacing="4">
                <Link href="/lista-servicos">
                  <Button
                    as="a"
                    colorScheme="red"
                    variant="outline"
                    borderRadius={8}
                  >
                    Cancelar
                  </Button>
                </Link>
                <Button
                  borderRadius={8}
                  w={"100px"}
                  background="#406D77"
                  variant="primary"
                  color="white"
                  _hover={{
                    background: "gray",
                    transition: "all 0.4s",
                  }}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Sidebar>
    </>
  );
}
