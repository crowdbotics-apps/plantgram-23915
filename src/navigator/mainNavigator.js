import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial194247Navigator from '../features/Tutorial194247/navigator';
import NotificationList194219Navigator from '../features/NotificationList194219/navigator';
import Settings194218Navigator from '../features/Settings194218/navigator';
import Settings194210Navigator from '../features/Settings194210/navigator';
import UserProfile194208Navigator from '../features/UserProfile194208/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial194247: { screen: Tutorial194247Navigator },
NotificationList194219: { screen: NotificationList194219Navigator },
Settings194218: { screen: Settings194218Navigator },
Settings194210: { screen: Settings194210Navigator },
UserProfile194208: { screen: UserProfile194208Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
