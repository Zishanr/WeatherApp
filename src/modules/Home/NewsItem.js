/* Created By Zishan Rashid */

import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';


export default NewsItem = ({ newsItem }) => {
    return (
        <View style={{flex:1, borderRadius: 10, }}>

            <TouchableOpacity style={{ margin: 10, flexDirection: 'row' }}>

                <Image style={{ height: 40, width: 40 }}
                    source={require('../../../asests/new.png')} />

                <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 20 }}>
                        {newsItem.name}
                    </Text>

                    <Text style={{ fontSize: 16, marginTop: 5 }}>
                        {newsItem.description}
                    </Text>

                </View>
            </TouchableOpacity>

        </View >
    );
}