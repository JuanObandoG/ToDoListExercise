import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = function Task(props) {
    return ( <View style = {taskStyle.generalStyle}>
                <View style = {taskStyle.container}>
                    <View style = {taskStyle.bulletPoint}></View>
                    <Text style = {taskStyle.text}>{props.text}</Text>
                </View>
            </View>
    )
};


const taskStyle = StyleSheet.create({
    generalStyle: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
    bulletPoint: {
        borderRadius: 6,
        borderWidth: 2,
        marginRight: 15,
        width: 12,
        height: 12
    },
    text: {
        maxWidth: '90%'
    }
  });

  export default Task;