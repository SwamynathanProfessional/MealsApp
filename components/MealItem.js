import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const MealItem = props => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onSelectedMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <Text style={styles.title}> {props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordabilty}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MealItem: {
    height: 800,
    width: '100%',
    backgroundColor: '#ccc',
  },

  bgImage: {
    height: '100%',
    width: '100%',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '80%',
  },

  title: {
    fontSize: 22,
    color: 'white',

    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default MealItem;
