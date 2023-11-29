import {
  Box,
  Button,
  Flex,
  FormControl,
  Text,
  HStack,
  Input,
  Link,
  Stack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";

export function CadastroClientes() {
  return (
    <Sidebar>
      <Flex
        w="70%"
        my="6"
        mx="auto"
        align="center"
        justify="center"
        bg={{ base: "white", sm: "#EDF2F7" }}
      >
        <Box flex="1" borderRadius={8} bg="white" p={["6", "8"]}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Heading mb={5} size="lg" color={"black"}>
              Cadastrar Cliente
            </Heading>
            <Flex
              flexDirection={useBreakpointValue({
                base: "column",
                md: "row",
              })}
            >
              <FormControl w="100%">
                <Text>Nome</Text>
                <Input
                  isRequired
                  placeholder="Nome completo"
                  id="nome"
                  type="text"
                  name="nome"
                  w={useBreakpointValue({ base: "100%", md: "95%" })}
                />
              </FormControl>
              <FormControl mt={{base: 4, md: 0}}>
                <Text >Telefone</Text>
                <Input
                  isRequired
                  placeholder="(00)00000-0000"
                  id="telephone"
                  type="text"
                  name="telephone"
                  maxLength={15}
                  w={useBreakpointValue({ base: "100%", md: "95%" })}
                />
              </FormControl>
            </Flex>

            
            <Stack spacing="5" mt={4}>
              <Flex
                flexDirection={useBreakpointValue({
                  base: "column",
                  md: "row",
                })}
              >
                <FormControl >
                  <Text >CPF</Text>
                  <Input
                    isRequired
                    placeholder="999.999.999-99"
                    id="cpf"
                    type="text"
                    name="cpf"
                    w={useBreakpointValue({ base: "100%", md: "95%" })}
                  />
                </FormControl>
                <FormControl mt={{base: 4, md: 0}}>
                  <Text>Email</Text>
                  <Input
                    isRequired
                    placeholder="email@email.com"
                    id="email"
                    type="email"
                    name="email"
                    w={useBreakpointValue({ base: "100%", md: "95%" })}
                  />
                </FormControl>
              </Flex>
            </Stack>
            <Stack spacing="5" mt={4}>
              <Flex
                flexDirection={useBreakpointValue({
                  base: "column",
                  md: "row",
                })}
              >
                <FormControl >
                  <Text >Endereço</Text>
                  <Input
                    isRequired
                    id="endereco"
                    type="text"
                    name="endereco"
                    w={useBreakpointValue({ base: "100%", md: "97%" })}
                  />
                </FormControl>
              </Flex>
            </Stack>
            <Flex mt="8" justify="flex">
              <HStack spacing="4">
                <Link href="/lista-clientes">
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
          </form>
        </Box>
      </Flex>
    </Sidebar>
  );
}
