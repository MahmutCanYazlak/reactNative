import { GenericView, GenericImage } from '@/assets/css';
import React, { useState } from 'react';
import { colors, dHeight, dWidth } from '@/constants';
import logoImage from '@/assets/img/logo.png';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginThunk } from '@/store/reducers/authReducer';
import { AppDispatch } from '@/store';
import { IUser } from '@/types/authTypes';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';

const LoginScreen = ({ navigation }: any) => {

  const dispatch = useDispatch<AppDispatch>();

  const [user, setUser] = useState<IUser>({ email: '', password: '' });

  const handleLogin = () => {
    // login işlemleri burada yapılabilir
    dispatch(loginThunk({ user, navigation }));
  };

  return (
    <SafeAreaWrapper>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <GenericView flex={1} backgroundColor={colors.primary}>
          <GenericView flex={1} justifyContent="center" alignItems="center" marginTop={dHeight * 0.02}>
            <GenericImage resizeMode={'center'} width={dWidth * 0.5} height={dHeight * 0.5} source={logoImage} />
          </GenericView>
          <GenericView flex={1}>
            <Input
              label="Kullanıcı Adı"
              value={user.email}
              onChangeText={(text) => setUser({ ...user, email: text })}
              keyboardType={'email-address'}
            />
            <Input
              label="Şifre"
              value={user.password}
              onChangeText={(text) => setUser({ ...user, password: text })}
              secureTextEntry
              /* right */
            />
            <Button text="Giriş Yap" backgroundColor={colors.primaryLight} textColor={colors.primary} onPress={() => { handleLogin()/* navigation.navigate('HomeScreen') */ }} />
          </GenericView>
        </GenericView>
      </TouchableWithoutFeedback>
    </SafeAreaWrapper>
  );
};

export default LoginScreen;

