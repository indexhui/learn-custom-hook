import { Box, Flex } from '@chakra-ui/react';
import { SettingsIcon, CloseIcon } from '@chakra-ui/icons';

import { motion } from 'framer-motion';
import { withDisclosure } from './ToggleMenu';

const SubMenu = ({
  isOpen,
  onToggle,
  isMotionVisible,
  onMotionVisible,
  onMotionToggle,
}) => {
  return (
    <Box>
      <SettingsIcon w="24px" onClick={onToggle} cursor="pointer" zIndex="10" />
      <motion.div
        hidden={!isMotionVisible}
        initial={false}
        onAnimationStart={onMotionVisible}
        onAnimationComplete={onMotionToggle}
        animate={{ opacity: isOpen ? 1 : 0 }}
        style={{
          background: 'rgba(0,0,0,.1)',
          overflow: 'hidden',
          width: '100%',
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '0',
          height: '100vh',
          top: '0',
          backdropFilter: 'blur(1px)',
        }}
        onClick={onToggle}
      ></motion.div>
      <motion.div
        hidden={!isMotionVisible}
        initial={false}
        animate={{ width: isOpen ? 300 : 0 }}
        style={{
          background: 'blue',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '0',
          height: '100vh',
          top: '0',
          zIndex: '10',
        }}
      >
        <CloseIcon
          position="absolute"
          top="20px"
          right="20px"
          cursor="pointer"
          onClick={onToggle}
        />
        <Flex w="100%" bg="white" p="20px" h="100vh" shadow="md">
          選項一
        </Flex>
      </motion.div>
    </Box>
  );
};

export default withDisclosure(SubMenu);
