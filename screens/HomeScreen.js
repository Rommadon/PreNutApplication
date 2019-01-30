import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Task from '../components/Task';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Nut Application',
  };
  constructor(props){
    super(props);
    this.state = {
        taskArray: [],
        taskText: '',
        taskOwner: '',
    };
  }
  render() {
      let tasks = this.state.taskArray.map((val, key)=>{
          return <Task key={key} keyval={key} val={val}
                  deleteMethod={()=>this.deleteTask(key)}/>
      });
      return (
          <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
                  {tasks}
              </ScrollView>
              <View style={styles.footer}>
                  <TextInput 
                      style={styles.textInput}
                      placeholder='Input Task :'
                      onChangeText={(taskText)=> this.setState({taskText})}
                      value={this.state.taskText}
                      placeholderTextColor='white'
                      underlineColorAndroid='transparent'>
                  </TextInput>
                  <TextInput 
                      style={styles.textInput}
                      placeholder='Input Owner :'
                      onChangeText={(taskOwner)=> this.setState({taskOwner})}
                      value={this.state.taskOwner}
                      placeholderTextColor='white'
                      underlineColorAndroid='transparent'>
                  </TextInput>
              </View>
              <TouchableOpacity onPress={ this.addTask.bind(this) } style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
          </View>
      );
  }
  addTask(){
      if(this.state.taskText || this.setState.taskOwner){
          var d = new Date();
          this.state.taskArray.push({
              'date':d.getFullYear()+
              "/"+(d.getMonth()+1) +
              "/"+ d.getDate(),
              'task': this.state.taskText,
              'owner': this.state.taskOwner
          });
          this.setState({ taskArray: this.state.taskArray });
          this.setState({taskText:''});
          this.setState({taskOwner:''});
      }
  }
  deleteTask(key){
      this.state.taskArray.splice(key, 1);
      this.setState({taskArray: this.state.taskArray});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 10,
      backgroundColor: '#252525',
      borderTopColor: '#ededed'
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24
  },
});
