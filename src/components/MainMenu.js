import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import useDisclosure from './../hooks/useDisclosure';

const MainMenu = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const {
    isOpen: isMotionVisible,
    onOpen: onMotionVisible,
    onToggle: onMotionToggle,
  } = useDisclosure(isOpen);

  return (
    <>
      <HamburgerIcon w="24px" onClick={onToggle} cursor="pointer" />
      <motion.div
        // {...getDisclosureProps()}
        hidden={!isMotionVisible}
        onClick={onToggle}
        initial={false}
        onAnimationStart={onMotionVisible}
        onAnimationComplete={() => onMotionToggle(isOpen)}
        animate={{
          opacity: isOpen ? 1 : 0,
          backdropFilter: isOpen ? 'blur(2px)' : 'none',
        }}
        style={{
          background: 'rgba(0,0,0,.1)',
          overflow: 'hidden',
          width: '100%',
          whiteSpace: 'nowrap',
          position: 'absolute',
          left: '0',
          height: '100vh',
          top: '0',
          zIndex: '10',
          // backdropFilter: 'blur(2px)',
        }}
      ></motion.div>
      <motion.div
        hidden={!isMotionVisible}
        initial={false}
        animate={{ width: isOpen ? 300 : 0 }}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
          left: '0',
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
          onClick={onClose}
        />
        <Flex w="100%" bg="white" p="20px" h="100vh" shadow="md">
          選項一
        </Flex>
      </motion.div>
    </>
  );
};

export default MainMenu;
