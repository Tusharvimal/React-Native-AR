import React from 'react';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import { StyleSheet } from 'react-native';
import FirstARPage from '../Screens/FirstARPage';

const AppNavigation = () => {
    return (
        <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
                scene: FirstARPage,
            }}
            style={styles.f1}
        />
    )
}

var styles = StyleSheet.create({
    f1: { flex: 1 }
});

export default AppNavigation