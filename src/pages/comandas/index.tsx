import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Heading,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";

export function Comandas() {
  return (
    <>
      <Sidebar>
        <Flex w="100%" my="6" maxWidth={"90%"} mx="auto" px="6">
          <Box flex="1" borderRadius={8} bg="white" p={["6", "8"]}>
            <Heading size="lg" color={"black"}>
              Criar comanda
            </Heading>

            <Divider my="6" borderColor="gray.100" />

            <Flex
              flexDirection={{
                base: "column",
                md: "row",
              }}
            >
              <FormControl w="100%">
                <Text>Cliente</Text>
                <Select
                  id="cliente"
                  name="cliente"
                  w={{ base: "100%", md: "98%" }}
                >
                  <option value="Selecione">Selecione</option>
                  <option value="cliente">Nome do Cliente1</option>
                  <option value="cliente">Nome do Cliente2</option>
                </Select>
              </FormControl>
              <FormControl mt={{ base: 5, md: 0 }}>
                <Text>Serviço</Text>
                <Select
                  id="perfilId"
                  name="perfil"
                  w={{ base: "100%", md: "98%" }}
                >
                  <option value="Selecione">Selecione</option>
                  <option value="Corte">Corte</option>
                  <option value="Luzes">Luzes</option>
                </Select>
              </FormControl>
            </Flex>

            <Flex mt="8" justify="flex">
              <HStack spacing="4">
                <Link href="/home">
                  <Button as="a" colorScheme="red">
                    Cancelar
                  </Button>
                </Link>
                <Button
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
