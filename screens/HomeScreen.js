import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Project from '../components/Project';
import { store } from '../Store/Store';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        projectArray: [],
        projectText: '',
        projectOwner: '',
    };
  }
  render() {
      const {navigate} = this.props.navigation;
      let projects = this.state.projectArray.map((val, key)=>{
          return <Project key={key} keyval={key} val={val}
                  deleteMethod={()=>this.deleteProject(key, val)}
                  detailMethod={() => this.detailMethod(navigate, val)}/>
      });
      return (
          <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
                {projects}
              </ScrollView>
              <View style={styles.footer}>
                  <TextInput 
                      style={styles.textInput}
                      placeholder='Input project :'
                      onChangeText={(projectText)=> this.setState({projectText})}
                      value={this.state.projectText}
                      placeholderTextColor='white'
                      underlineColorAndroid='transparent'>
                  </TextInput>
              </View>
              <TouchableOpacity onPress={ this.addproject.bind(this) } style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
          </View>
      );o
  }
  addproject(){
      if(this.state.projectText || this.setState.projectOwner){
          var d = new Date();
          this.state.projectArray.push({
              'date':d.getFullYear()+
              "/"+(d.getMonth()+1) +
              "/"+ d.getDate(),
              'project': this.state.projectText,
          });
          this.setState({ projectArray: this.state.projectArray });
          this.setState({projectText:''});
      }
  }
  deleteProject(key, value){
      this.state.projectArray.splice(key, 1);
      store.taskArray.map((val, key)=>{
        if( val.ProjectName == value.project)
          store.taskArray.splice(key, 1);
      });
      this.setState({projectArray: this.state.projectArray});
  }
  detailMethod(navigate, val){
    store.ProjectName = val.project;
    navigate('Project')
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
