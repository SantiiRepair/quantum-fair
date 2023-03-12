import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import Identicon from "./Identicon";

type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      mb='3'
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          GOERLI
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button
      onClick={handleConnectWallet}
      bg="#666464"
      color="#000000"
      h='38px'
      fontSize="18px"
      minWidth='100px'
      borderRadius="13px"
      border="1px solid transparent"
      _hover={{
        borderColor: "blue.700",
        color: '#383636',
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Connect
    </Button>
  );
}