import { View, Text, FlatList, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, { useState } from 'react'
import { icons } from "../constants";

const DynamicView = ({item}) => {
  const longText = "이 글자의 길이에 따라 View의 크기가 변화하게 됩니다.";

  return (
    <View style={styles.container}>
      <View style={styles.dynamicView}>
        <Text className="font-pmedium" style={styles.text}>{item.tag}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  dynamicView: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: '#d3d3d3',
    borderRadius: 12,
    alignSelf: 'flex-start',  // View의 크기가 Text의 크기에 맞게 조정됩니다.
  },
  text: {
    fontSize: 12,
    color: '#000000'
  },
});

const Tag = ({posts}) => {
  return (
    <FlatList 
        data = {posts}
        keyExtractor = {(item) => item.$id}
        renderItem = {({item}) => (
          <DynamicView item={item}/>
        )}
        horizontal
    />
    
  )
}

export default Tag