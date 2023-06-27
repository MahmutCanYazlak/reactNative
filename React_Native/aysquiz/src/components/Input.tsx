import { GenericTouchableOpacity, GenericView } from '@/assets/css';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from './shared/Icons';
import { colors, dWidth } from '@/constants';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  iconSize?: number;
  iconColor?: string;
  right?: boolean;
  keyboardType?: any;
}

const Input: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  iconSize = 40,
  iconColor = colors.primaryDark,
  right,
  keyboardType = 'default',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <GenericView padding={dWidth * 0.025}>
        <TextInput
          label={label}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType={keyboardType}
          right={
            right && (
              <Icon name={showPassword ? 'eye-off' : 'eye'} size={iconSize} color={iconColor} onPress={togglePasswordVisibility} />
            )
          }

        />
      </GenericView>
    </TouchableWithoutFeedback >
  );
};


export default Input;
