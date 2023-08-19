import React from 'react';
import LoadingSpin from 'react-loading-spin';

const Loading: React.FC<{ primaryColor?: string }> = ({
  primaryColor = '#f4ede8',
}) => {
  return (
    <LoadingSpin
      duration="2s"
      width="3px"
      timingFunction="ease-in-out"
      direction="alternate"
      size="20px"
      primaryColor={primaryColor}
      secondaryColor="#333"
    />
  );
};

export default Loading;
