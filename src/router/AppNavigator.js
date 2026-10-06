import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileScreen } from '../screens/ProfileScreen';
import { ShowsScreen } from '../screens/ShowsScreen';
import { colors } from '../theme/Colors';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Profile',
  screenOptions: {
    contentStyle: { backgroundColor: colors.background },
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: colors.surface,
    headerTitleStyle: { fontWeight: '700' },
  },
  screens: {
    Profile: {
      screen: ProfileScreen,
      options: { headerShown: false },
    },
    Shows: {
      screen: ShowsScreen,
      options: { title: 'Series de TV' },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
