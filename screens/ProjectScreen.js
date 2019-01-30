import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { store } from './Store';

export default class ProjectScreen extends React.Component {
  static navigationOptions = {
    title: 'Project',
  };
  constructor(props){
    super(props);
  }
  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.textCenter}>{store.ProjectName}</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
});
