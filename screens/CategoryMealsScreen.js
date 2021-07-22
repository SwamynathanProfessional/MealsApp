import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoriesMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The categories Meal Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({routeName: 'MealDetail'});
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          //props.navigation.goBack();
          props.navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesMealsScreen;
