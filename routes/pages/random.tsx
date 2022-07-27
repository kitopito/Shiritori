// support jsx on deno deploy
/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { Head, useData } from "aleph/react";
import React, { useState, useMemo, useReducer } from 'react';
import { Badge, Flex, Heading, HStack, Link, Text, VStack, Button, Input } from "chakra-ui";
import { RandomBuff, RandomBuffSupplyer } from "../../logic_buff/random_buff.ts";
import { useDI } from "../../di/useDI.tsx";

export default function Random() {
//  const [state, dispatch] = useShiritoriReducer();

//  const randomBuff = new RandomBuff();
  const randomBuff = useDI<RandomBuff>(RandomBuffSupplyer);
  console.log("ふがふが previous word: " + randomBuff.previousWord);

/*
  function setNextWord(_word: string) {
    console.log("setNextWord");
    dispatch({type: 'CHANGE_VALUE', data: _word, field: 'nextWordInput'});
  }
  function setPreviousWord(_word: string) {
    console.log("setPreviousWord");
    dispatch({type: 'CHANGE_VALUE', data: _word, field: 'previousWord'});
  }
*/

  return (
    <Flex as="article" direction="column" gap={2} p="4" borderWidth="1px" borderRadius="lg" align="center">
      <Heading as="h1" size="lg">
        {'Random Matching'}
      </Heading>
      <p id="previousWord">前の単語:{randomBuff.previousWord}</p>
      <HStack spacing={2}>
        <Input placeholder="次の単語を入力" value={randomBuff.nextWordInput} size="lg" variant="outline" onChange={(event) => {
            console.log(event.target.value);
            randomBuff.NextWord = event.target.value;
        }}></Input>
        <Button onClick={() => {randomBuff.submission();}}>
          送信
        </Button>
      </HStack>
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
      </Flex>
    </Flex>
  )
}