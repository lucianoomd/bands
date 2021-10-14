import {AppRegistry} from 'react-native';
import Routes from './src/routes/Routes';
import {name as appName} from './app.json';

const App: () => React$Node = () => Routes;

AppRegistry.registerComponent(appName, () => App);
