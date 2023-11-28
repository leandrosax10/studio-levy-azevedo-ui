import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";
import { Ring } from "@uiball/loaders";

export function Clientes() {
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
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} align="center">
                <HStack spacing="1" justify="center" />
              </Stack>
            </Stack>
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
                      <FormLabel htmlFor="sequential">Nome</FormLabel>
                      <Input
                        isRequired
                        placeholder="Nome completo"
                        id="nome"
                        type="text"
                        name="nome"
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
                      <FormLabel htmlFor="endereco">Endereço</FormLabel>
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
                <Stack spacing="5">
                  <Flex
                    flexDirection={useBreakpointValue({
                      base: "column",
                      md: "row",
                    })}
                  >
                    <FormControl>
                      <FormLabel htmlFor="cpf">CPF</FormLabel>
                      <Input
                        isRequired
                        placeholder="999.999.999-99"
                        id="cpf"
                        type="text"
                        name="cpf"
                        w={useBreakpointValue({ base: "100%", md: "95%" })}
                      />
                    </FormControl>
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
                  </Flex>
                </Stack>
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
