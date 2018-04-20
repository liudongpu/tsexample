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



import { MaterialCommunityIcons } from '@expo/vector-icons';


import { DatePicker,Picker,SearchBar ,InputItem,List,Button,TextareaItem} from 'antd-mobile';



import QRCode from 'react-native-qrcode';


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
