import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
  Linking,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

import Oauth from '../lib/Oauth';

const { width, height } = Dimensions.get("screen");

const Register = () => {
  const [accessToken, setAccessToken] = useState(null);

  const handleAuth = () => {

    const url = 'https://login.salesforce.com/?startURL=%2Fsetup%2Fsecur%2FRemoteAccessAuthorizationPage.apexp';
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
      // Oauth.authenticate(function(error, payload) {
      //     if (error) {
      //         console.log(error);
      //     } else {
      //         setAccessToken(payload.access_token);
      //     }
      // });
  }

  return (
    <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Sign up with
                </Text>
                <Block middle>
                  <Button color="primary" style={styles.createButton}title="Authenticate" onPress={handleAuth}>
                        {accessToken && <Text>Access Token: {accessToken}</Text>}
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        Register
                      </Text>
                  </Button>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
  );
};

export default Register;




const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});
