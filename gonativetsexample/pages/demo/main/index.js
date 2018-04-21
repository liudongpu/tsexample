import React, { Component } from 'react';



import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ListView,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
  RefreshControl,
  Switch,
  WebView,
  View
} from 'react-native';



import { Icon } from 'react-native-vector-icons';







import styles from "./index-style";

import styletg from "../../agent/theme/global-style";

import { guidebook} from '../../../scripts/base/index';





export default class  extends Component {


  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '',




  });


  constructor(props) {
    super(props);
    
    this.state = {};
  }











  

  render(){

    

    return (
      <View><Text>aaa</Text>
    </View>
    )
  }

};
