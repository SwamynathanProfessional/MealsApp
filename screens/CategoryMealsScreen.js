import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
const CategoriesMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordabilty}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
              mealId: itemData.item.title,
            },
          });
        }}
      />
    );
  };
  const catId = props.navigation.getParam('categoryId');

  const displayMeals = MEALS.filter(meal => meal.categoryIds);
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

CategoriesMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  return {
    headerTitle: catId,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesMealsScreen;
