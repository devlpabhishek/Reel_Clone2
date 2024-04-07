/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from './Components/Test';
import Main from './Components/Main';
import Reels from './Components/Reels';

AppRegistry.registerComponent(appName, () => Reels);
