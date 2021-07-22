import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerStyle: {
          headerTitle: 'Meals Categories',
          backgroundColor: Platform.OS === 'android' ? Colors.accentColor : '',
          headerTintColor:
            Platform.OS === 'android' ? 'red' : Colors.primaryColor,
        },
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerStyle: {},
      },
    },

    MealDetail: MealDetailScreen,
  },
  {
    //initialRouteName: 'MealDetail',
    defaultNavigationOptions: {
      backgroundColor: Platform.OS === 'android' ? Colors.accentColor : '',
      headerTintColor: Platform.OS === 'android' ? 'red' : Colors.primaryColor,
      headerTitle: 'A screen',
    },
  },
);

export default createAppContainer(MealsNavigator);
