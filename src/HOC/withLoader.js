import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {fetchGallery} from '../actions';

export default (propName) => (ChildComponent) => {
    class withLoader extends Component {
        componentDidMount() {
            this.props.fetchGallery();
        }

        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }

        render() {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    {this.isEmpty(this.props[propName]) ? <ActivityIndicator size="large" color="#aaaaaa"/> :
                        <ChildComponent {...this.props}/>}
                </View>);
        }
    }

    function mapStateToProps({imageList}) {
        return {imageList};
    }

    return connect(mapStateToProps, {fetchGallery})(withLoader);
}

