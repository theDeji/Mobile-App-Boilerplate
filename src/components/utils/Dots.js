import React from 'react';
import { View } from 'react-native';

const Dots = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius:50,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

export default Dots;