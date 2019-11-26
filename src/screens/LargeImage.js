import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const LargeImage = ({navigation}) => {
    const bigImage = navigation.getParam('bigImage');
    const {imageStyles} = styles;

    return (
        <View style={{flex: 1}}>
            <Image
                style={imageStyles}
                source={{uri: bigImage}}
                resizeMode="contain"
            />
        </View>
    );
};

LargeImage.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('name')
});

const styles = StyleSheet.create({
    imageStyles: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

export default LargeImage;
