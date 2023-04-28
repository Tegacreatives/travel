import FontAwesome from '@expo/vector-icons/FontAwesome';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Search Screen',
          tabBarIcon: ({ color }) => <TabBarIcon name="magnify" color={color} />,
        }}
      />
      <Tabs.Screen
        name="AccountScreen"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="account-circle-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="SavedScreen"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="MessagesScreen"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <TabBarIcon name="inbox" color={color} />,
        }}
      />
    </Tabs>
  );
}
