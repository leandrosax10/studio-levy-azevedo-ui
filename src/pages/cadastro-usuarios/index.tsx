import {
  Box,
  Button,
  Flex,
  FormControl,
  Text,
  Heading,
  Input,
  Select,
  Stack,
  useBreakpointValue,
  HStack,
  Link,
} from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";

export function Usuarios() {
  return (
    <Sidebar>
      <Flex
        w="75%"
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
              Cadastrar Usuário
            </Heading>

            <Flex
              flexDirection={useBreakpointValue({
                base: "column",
                md: "row",
              })}
            >
              <FormControl>
                <Text>Nome</Text>
                <Input
                  isRequired
                  placeholder="Nome completo"
                  id="name"
                  type="name"
                  name="name"
                  w={useBreakpointValue({ base: "100%", md: "95%" })}
                />
              </FormControl>
              <FormControl mt={{ base: 3, md: 0 }}>
                <Text>Telefone</Text>
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

            <Stack spacing="5" mt={{ base: 0, md: 2 }}>
              <Flex
                flexDirection={useBreakpointValue({
                  base: "column",
                  md: "row",
                })}
                mt={{ base: 4, md: 0 }}
              >
                <FormControl>
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
                <FormControl mt={{ base: 3, md: 0 }}>
                  <Text>Área</Text>
                  <Input
                    isRequired
                    placeholder="Área de atuação"
                    id="area"
                    type="area"
                    name="area"
                    w={useBreakpointValue({ base: "100%", md: "95%" })}
                  />
                </FormControl>
              </Flex>
            </Stack>
            <Stack spacing="5" mt={{ base: 2, md: 2 }}>
              <Flex
                flexDirection={useBreakpointValue({
                  base: "column",
                  md: "row",
                })}
              >
                <FormControl>
                  <Text>Login</Text>
                  <Input
                    isRequired
                    placeholder="Digite o nome de usuário"
                    id="login"
                    type="login"
                    name="login"
                    w={useBreakpointValue({ base: "100%", md: "95%" })}
                  />
                </FormControl>
                <FormControl mt={{ base: 3, md: 0 }}>
                  <Text>Senha</Text>
                  <Input
                    isRequired
                    placeholder="********"
                    id="password"
                    type="password"
                    name="password"
                    w={useBreakpointValue({ base: "100%", md: "95%" })}
                  />
                </FormControl>
              </Flex>
            </Stack>
            <Flex>
              <FormControl mt={{ base: 2, md: 2 }}>
                <Text>Perfil</Text>
                <Select
                  id="perfilId"
                  name="perfil"
                  w={useBreakpointValue({ base: "100%", md: "98%" })}
                >
                  <option value="Selecione">Selecione</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Administrador">Operador</option>
                </Select>
              </FormControl>
            </Flex>
            <Flex mt="8" justify="flex">
              <HStack spacing="4">
                <Link href="/lista-usuarios">
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
