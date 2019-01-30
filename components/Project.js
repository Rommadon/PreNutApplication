import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
export default class Project extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.project}>
                <Text style={styles.projectText}>Create Date : {this.props.val.date}</Text>
                <Text style={styles.projectText}>Project : {this.props.val.project}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.projectDelete}>
                    <Text style={styles.projectDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    project: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    projectText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    projectDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    projectDeleteText: {
        color: 'white'
    }
});