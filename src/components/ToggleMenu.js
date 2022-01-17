import React, { useState } from 'react';

export const withDisclosure = ChildComponent => {
  return props => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMotionVisible, setMotionVisible] = useState(isOpen);
    return (
      <ChildComponent
        {...props}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        isMotionVisible={isMotionVisible}
        onMotionVisible={() => setMotionVisible(true)}
        onMotionToggle={() => setMotionVisible(isOpen)}
      />
    );
  };
};
