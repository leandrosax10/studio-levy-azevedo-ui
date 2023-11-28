import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Layout } from "../../components/Layout";
import { Ring } from "@uiball/loaders";

//import { useLogin } from 'hooks/useLogin';

export function Login() {
  const loading = false;

  return (
    <Flex
      w={useBreakpointValue({ base: "100%", md: "auto" })}
      h="100vh"
      align="center"
      justify="center"
      bg={useBreakpointValue({ base: "white", sm: "#EDF2F7" })}
    >
      <Layout>
        <Stack spacing="6">
          <Box
            py={{ base: "0", sm: "16" }}
            px={{ base: "4", sm: "10" }}
            bg={useBreakpointValue({ base: "transparent", sm: "white" })}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} align="center">
                <Image
                  src={logo}
                  display="flex"
                  align="center"
                  w={56}
                  justifyContent="center"
                />
                <HStack spacing="2" justify="center"></HStack>
              </Stack>
            </Stack>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Stack spacing="8">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="login">Login</FormLabel>
                    <Input isRequired id="login" type="text" name="login" />
                    <FormErrorMessage></FormErrorMessage>
                  </FormControl>
                </Stack>
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel
                      htmlFor="password"
                      justifyContent="space-between"
                      display="flex"
                    >
                      Senha
                      <Button variant="link" color="gray.400" size="sm">
                        Esqueceu sua senha?
                      </Button>
                    </FormLabel>
                    <Input
                      isRequired
                      id="password"
                      type="password"
                      name="senha"
                    />
                  </FormControl>
                </Stack>
                <Stack spacing="6">
                  <Button
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
                      "Entrar"
                    )}
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Layout>
    </Flex>
  );
}
