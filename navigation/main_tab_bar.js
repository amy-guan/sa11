import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/about';
import SearchTab from '../navigation/search_tab';
import { View, Text } from 'react-native';

const AboutTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
};


const MainTabBar = createBottomTabNavigator(
  {
    SearchTab,
    AboutTab: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'About',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="info-circle"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'SearchTab',
  },
);


export default MainTabBar;
