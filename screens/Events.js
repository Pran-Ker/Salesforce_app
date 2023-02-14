// Galio components
import { Block, Button as GaButton, Text, theme } from "galio-framework";
import { Button, Header, Icon, Input, Select, Switch } from "../components";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// Argon themed components
import { argonTheme, tabs } from "../constants";

import React from "react";

const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  state = {
    "switch-1": true,
    "switch-2": false,
  };

  toggleSwitch = (switchId) =>
    this.setState({ [switchId]: !this.state[switchId] });

  
  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30, width }}
        >
          {/* {this.renderButtons()}
          {this.renderText()}
          {this.renderInputs()}
          {this.renderSocial()}
          {this.renderSwitches()}
          {this.renderNavigation()}
          {this.renderTableCell()} */}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER,
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY,
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO,
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS,
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING,
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default Elements;
