import { Box, Text, Switch } from '@chakra-ui/react';

import { useState } from 'react';

const Panel = () => {
  //TODO:
  //重複的程式碼
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Box
      mx="12px"
      flex="1"
      borderWidth="2px"
      borderColor={isOpen ? 'blue.300' : 'gray.300'}
      rounded="lg"
      p="20px"
      textAlign="left"
      bg={isOpen ? 'white' : 'gray.50'}
      shadow={isOpen ? 'sm' : 'none'}
    >
      <Text
        fontSize="md"
        color={isOpen ? 'gray.700' : 'gray.400'}
        fontWeight="bold"
      >
        Auto Tracking{' '}
      </Text>
      <Text color={isOpen ? 'gray.700' : 'gray.400'}>
        {isOpen ? '開' : '關'}
      </Text>
      <Switch onChange={onToggle} value={isOpen} />
    </Box>
  );
};

export default Panel;
