import React, { Component } from 'react';




import styles from "./index-style";

import styletg from "../../agent/theme/global-style";

import { guidebook} from '../../../scripts/base/index';


import {View} from "react-native";
import {Text} from "react-native";



export default class  extends Component {


  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '示例页面',




  });


  constructor(props) {
    super(props);
    
    this.state = {"refreshing":false};
  }











  

  render(){

    

    return (
      <View><Text>aaa</Text>
        
    </View>
    )
  }

};
