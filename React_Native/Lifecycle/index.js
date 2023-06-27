/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import lifecyleMount from './src/LifecyleMount';
import cleanUp from './src/CleanUp';

AppRegistry.registerComponent(appName, () => cleanUp);
