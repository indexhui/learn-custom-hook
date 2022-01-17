import { Flex } from '@chakra-ui/react';

import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

const MainHeader = () => {
  return (
    <header>
      <Flex w="100%" justify="center" shadow="sm" bg="white">
        <Flex
          w="90%"
          h="52px"
          justify="space-between"
          align="center"
          shadow="sm"
        >
          <MainMenu />
          <SubMenu />
        </Flex>
      </Flex>
    </header>
  );
};

export default MainHeader;
