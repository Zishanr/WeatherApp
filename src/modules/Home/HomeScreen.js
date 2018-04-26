import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import NewsItem from './NewsItem';
import { fetchNewsDataAction } from '../../modules/Home/home.actions';
import { connect } from 'react-redux';
import { AppBar } from '../../common';


class HomeScreen extends Component {


    componentWillMount() {
        this.props.fetchNewsDataAction();
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                <AppBar
                    headerText={'News'}></AppBar>
                {this._renderView()}
            </View>
        );
    }

    _renderView() {
        if (this.props.loading) {
            return this._loadingBookLoader();
        } else {
            return (
                <FlatList
                    style={{ flex: 1 }}
                    data={this.props.newList}
                    renderItem={this._renderSearchItem}
                    keyExtractor={this._keyExtractor} />
            );
        }
    }

    // FlatList KeyExtractor
    _keyExtractor = (item, index) => index.toString();

    // FlatList Item View
    _renderSearchItem = ({ item }) => {
        return (
            <NewsItem
                newsItem={item} />
        );
    }

    // Show loader icon
    _loadingBookLoader() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

}

const mapStateToProps = ({ homeReducer }) => {
    const { newList, loading, } = homeReducer;
    return { newList, loading, };
};


export default connect(mapStateToProps, { fetchNewsDataAction })(HomeScreen);