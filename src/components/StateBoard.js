import { Flex, Box, Text, Divider } from '@chakra-ui/react';
import StateMore from './StateMore';

const StateBoard = props => {
  return (
    <Flex
      bg="cyan.700"
      w="100%"
      h="240"
      mx="12px"
      rounded="lg"
      color="white"
      py="50px"
      textAlign="left"
    >
      <Box flex="1" px="24px">
        <Text>People Going</Text>
        <Text fontSize="36px" fontWeight="bold">
          274
        </Text>
        <StateMore />
      </Box>
      <Divider orientation="vertical" />
      <Box flex="1" px="24px">
        <Text>People Going</Text>
        <Text fontSize="36px" fontWeight="bold">
          274
        </Text>
        <StateMore />
      </Box>
      <Divider orientation="vertical" />
      <Box flex="1" px="24px">
        <Text>People Going</Text>
        <Text fontSize="36px" fontWeight="bold">
          274
        </Text>
        <StateMore />
      </Box>
    </Flex>
  );
};

export default StateBoard;
