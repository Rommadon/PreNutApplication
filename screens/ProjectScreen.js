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
import { store } from '../Store/Store';

export default class ProjectScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        taskText: '',
        taskOwner: '',
    };
  }
  render() {
      let tasks = store.taskArray.map((val, key)=>{
        if( val.ProjectName == store.ProjectName)
          return <Task key={key} keyval={key} val={val}
                  deleteMethod={()=>this.deleteTask(key)}/>
      });
      return (
          <View style={styles.container}>
              <Text style={styles.textHeader}>
                {store.ProjectName}
              </Text>
              <Text style={styles.textSubHeader}>
                List Task
              </Text>
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
                      placeholder='Input owner :'
                      onChangeText={(taskOwner)=> this.setState({taskOwner})}
                      value={this.state.taskOwner}
                      placeholderTextColor='white'
                      underlineColorAndroid='transparent'>
                  </TextInput>
              </View>
              <TouchableOpacity onPress={ this.addtask.bind(this) } style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
          </View>
      );
  }
  addtask(){
    if(this.state.taskText || this.setState.taskOwner){
        var d = new Date();
        store.taskArray.push({
            'ProjectName': store.ProjectName,
            'date':d.getFullYear()+
            "/"+(d.getMonth()+1) +
            "/"+ d.getDate(),
            'task': this.state.taskText,
            'owner': this.state.taskOwner,
        });
        this.setState({taskText:''});
        this.setState({taskOwner:''});
    }
  }
  deleteTask(key){
      store.taskArray.splice(key, 1);
      this.setState({taskText: this.state.taskText});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  },
  textSubHeader: {
    textAlign: 'left',
    fontSize: 14,
    padding: 5,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
      paddingTop: 10
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
