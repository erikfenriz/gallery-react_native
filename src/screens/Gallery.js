import React from 'react';
import {connect} from 'react-redux';
import {Image, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import withLoader from '../HOC/withLoader';

const Gallery = ({imageList, navigation}) => {

    const {imageStyles, textStyles} = styles;

    return (
            <FlatList
                data={imageList}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('LargeImage', {bigImage: item.urls.regular, name: item.user.name})}>
                        <Image
                            style={imageStyles}
                            source={{uri: item.urls.small}}
                        />
                        <Text style={textStyles}>{item.user.name}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={(result) => result.id}
                showsVerticalScrollIndicator={false}
            />
    );
};


const styles = StyleSheet.create({
    imageStyles: {
        alignSelf: 'center',
        height: 300,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
    },
    textStyles: {
        alignSelf: 'center',
        margin: 10,
    },
});

export default connect(null, {})(withLoader('imageList')(Gallery));
