import React from "react";
import {View , Text} from "react-native";
import styles from "./style";
import Styles from "./style"

export default function Title(){
    return(
        <View style={Styles.boxTitle}>
            <Text style={Styles.textTitle}>IMCalc</Text>
        </View>
    );
}