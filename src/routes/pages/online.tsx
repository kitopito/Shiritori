// support jsx on deno deploy
/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { Head, useData } from "aleph/react";
import React, { useState, useMemo } from 'react';


export default function Online() {
  return (
    <Flex as="article" direction="column" gap={2} p="4" borderWidth="1px" borderRadius="lg" align="center">
      <Heading as="h1" size="lg">
        {'chomechome'}
      </Heading>
      <Flex direction="column" gap={2}>
        <HStack spacing={2}>
          <Text fontSize="sm">{"2022年7月23日"}</Text>
          <Badge colorScheme="blue" borderRadius="full">
            {'kome'}
          </Badge>
        </HStack>
        <Text>{'chome'}</Text>
        <HStack spacing={2}>
          {"hogehoge"}
        </HStack>
        <Button as="a" href="./random">Random Match</Button>
      </Flex>
    </Flex>
  )
}
