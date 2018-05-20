import React from 'react';
import { bool, string } from 'prop-types';
import { Icon } from 'react-native-elements';

const TabIcon = (props) => {
  const color = props.focused ? '#3abde2' : '#ffffff';
  return (
    <Icon name={props.name} type={props.type} color={color} />
  );
};

TabIcon.propTypes = {
  name: string.isRequired,
  type: string,
  focused: bool,
};

TabIcon.defaultProps = {
  type: 'material',
  focused: false,
};

export default TabIcon;
