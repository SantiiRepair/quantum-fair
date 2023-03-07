import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Flex
      flexDirection="row"
      alignItems="end"
      justifyContent="end"
      h="10vh"
      bg="gray.800"
      as='nav'
    >
      {children}
    </Flex>
  );
}