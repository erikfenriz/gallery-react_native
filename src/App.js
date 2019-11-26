import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Gallery from './screens/Gallery';
import LargeImage from './screens/LargeImage';

const navigator = createStackNavigator({
    Gallery,
    LargeImage,
}, {
    initialRouteName: 'Gallery',
    defaultNavigationOptions: {
        title: 'Gallery',
    },
});

const App = createAppContainer(navigator);

const store = createStore(reducers, applyMiddleware(thunk));

export default () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}
