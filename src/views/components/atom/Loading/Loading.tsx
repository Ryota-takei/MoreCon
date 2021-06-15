import React, { memo } from "react";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

export const Loading: React.VFC = memo(() => {
  return (
    <Box w="100%" textAlign="center" pt="6">
      <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
    </Box>
  );
});
