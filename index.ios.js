'use strict';

// var React = require('react-native');
// var Featured = require('./Featured');
// var Search = require('./Search');

// var {
//     AppRegistry,
//     TabBarIOS,
//     Component
//    } = React;

import React, {Component} from 'react';
import Featured from './Featured';
import Search from './Search';
import {
    AppRegistry,
    TabBarIOS,
    Text
} from 'react-native';

export default class BookSearch extends Component {
// class BookSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    systemIcon="featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);
