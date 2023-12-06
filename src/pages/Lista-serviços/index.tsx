import { Box, Button, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";

export const ServicoList = () => {
  return (
    <Sidebar>
      <Flex w="100%" my="6" maxWidth={"90%"} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="white" p={["6", "8"]}>
          <Heading fontSize={"24px"} color={"black"}>
            Serviços
            <Link href="/servicos">
            <Button
              float={"right"}
              w={{ sm: "100%", md: 200 }}
              height={46}
              borderRadius={8}
              type="submit"
              background="#406D77"
              variant="primary"
              color="white"
              _hover={{
                background: "gray",
                transition: "all 0.4s",
              }}
            >
              Adicionar Serviço +
            </Button>
            </Link>
          </Heading>

          <Divider my="6" borderColor="gray.100" />
        </Box>
      </Flex>
    </Sidebar>
  );
};
//

