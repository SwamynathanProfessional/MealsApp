import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({routeName: 'CategoryMeals'});
        }}>
        <View style={styles.gridItem}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meals Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.accentColor : '',
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  },
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default CategoriesScreen;
