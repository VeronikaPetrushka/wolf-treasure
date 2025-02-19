import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type, active }) => {

  let imageSource;
  let iconStyle = [styles.icon];

  switch (type) {
    case '1':
      imageSource = require('../assets/menu/1.png');
      active && iconStyle.push(styles.active);
      break;
    case '2':
      imageSource = require('../assets/menu/2.png');
      active && iconStyle.push(styles.active);
      break;
    case '3':
      imageSource = require('../assets/menu/3.png');
      active && iconStyle.push(styles.active);
      break;
    case '4':
      imageSource = require('../assets/menu/4.png');
      active && iconStyle.push(styles.active);
      break;
    case 'next':
      imageSource = require('../assets/icons/next.png');
      break;
    case 'previous':
      imageSource = require('../assets/icons/previous.png');
      break;
    case 'close':
      imageSource = require('../assets/icons/close.png');
      break;
    case 'selected':
      imageSource = require('../assets/icons/selected.png');
      break;
    case 'back':
      imageSource = require('../assets/icons/back.png');
      break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  active: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#fa8009',
  },
});

export default Icons;
