import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";
import { Ring } from "@uiball/loaders";

export function Usuarios() {
  const loading = false;
  return (
    <Sidebar>
      <Flex
        w={useBreakpointValue({ base: "90%", md: "auto" })}
        align="center"
        justify="center"
        bg={useBreakpointValue({ base: "white", sm: "#EDF2F7" })}
      >
        <Stack spacing="8">
          <Box
            py={{ base: "0", sm: "16" }}
            px={{ base: "4", sm: "10" }}
            w={useBreakpointValue({ base: "20rem", sm: "35rem", md: "55rem" })}
            bg={useBreakpointValue({ base: "transparent", sm: "white" })}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <Flex
                    flexDirection={useBreakpointValue({
                      base: "column",
                      md: "row",
                    })}
                  >
                    <FormControl>
                      <FormLabel htmlFor="name">Nome</FormLabel>
                      <Input
                        isRequired
                        placeholder="Nome completo"
                        id="name"
                        type="name"
                        name="name"
                        w={useBreakpointValue({ base: "100%", md: "95%" })}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="telephone">Telefone</FormLabel>
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
                </Stack>
                <Stack spacing="5">
                  <Flex
                    flexDirection={useBreakpointValue({
                      base: "column",
                      md: "row",
                    })}
                  >
                    <FormControl>
                      <FormLabel htmlFor="name">Email</FormLabel>
                      <Input
                        isRequired
                        placeholder="email@email.com"
                        id="email"
                        type="email"
                        name="email"
                        w={useBreakpointValue({ base: "100%", md: "95%" })}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="area">Área</FormLabel>
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
                <Stack spacing="5">
                  <Flex
                    flexDirection={useBreakpointValue({
                      base: "column",
                      md: "row",
                    })}
                  >
                    <FormControl>
                      <FormLabel htmlFor="login">Login</FormLabel>
                      <Input
                        isRequired
                        placeholder="Digite o nome de usuário"
                        id="login"
                        type="login"
                        name="login"
                        w={useBreakpointValue({ base: "100%", md: "95%" })}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="password">Senha</FormLabel>
                      <Input
                        isRequired
                        placeholder="********"
                        id="password"
                        type="password"
                        name="password"
                        w={useBreakpointValue({ base: "100%", md: "95%" })}
                      />

                      {/*  {registerForm.values.password && (
                        <PasswordChecklist
                          rules={[
                            'minLength',
                            'specialChar',
                            'number',
                            'capital',
                            'match',
                          ]}
                          minLength={5}
                         
                          messages={{
                            minLength:
                              'A senha deve ter no mínimo 8 caracteres',
                            specialChar:
                              'A senha deve ter pelo menos um caracter especial',
                            number: 'A senha deve ter pelo menos um número',
                            capital:
                              'A senha deve ter pelo menos uma letra maiúscula',
                          }}
                          iconSize={12}
                        />
                      )} */}
                    </FormControl>
                  </Flex>
                </Stack>
                <Flex>
                  <FormControl>
                    <FormLabel htmlFor="perfil">Perfil</FormLabel>
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

                <Stack spacing="6">
                  <Button
                    height={46}
                    borderRadius={16}
                    type="submit"
                    background="#406D77"
                    variant="primary"
                    color="white"
                    _hover={{
                      background: "gray",
                      transition: "all 0.4s",
                    }}
                  >
                    {loading ? (
                      <Ring speed={2} lineWeight={5} color="white" size={24} />
                    ) : (
                      "Cadastrar"
                    )}
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Sidebar>
  );
}
