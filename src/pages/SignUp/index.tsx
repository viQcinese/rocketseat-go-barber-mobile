import React, { useState, useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', e => setIsKeyboardOpen(true));
    Keyboard.addListener('keyboardDidHide', e => setIsKeyboardOpen(false));

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView>
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="nam" icon="user" placeholder="nome" />
            <Input name="email" icon="mail" placeholder="email" />
            <Input name="password" icon="lock" placeholder="senha" />

            <Button
              onPress={() => {
                console.log('hi');
              }}
            >
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {!isKeyboardOpen && (
        <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      )}
    </>
  );
};

export default SignUp;
