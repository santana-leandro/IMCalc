import React, { useState } from "react";
import { View , Text, TextInput, TouchableOpacity } from "react-native";
import Resultimc from "./resultimc/"
import Styles from "./style"
export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc(( weight / (height * height) ).toFixed(2))
    }

    function validationImc(){
        if( weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha  o peso e altura ")
    }

    return(
        <View style={Styles.FormContext}>
            <View style={Styles.form}>
                <Text style={Styles.formLabel}>Altura</Text>
                <TextInput
                style={Styles.input}
                onChangeText={setHeight}
                value = {height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                ></TextInput>
                
                <Text style={Styles.formLabel}>Peso</Text>
                <TextInput
                style={Styles.input}
                onChangeText={setWeight}
                value = {weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                ></TextInput>

                <TouchableOpacity
                    style={Styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={Styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            <View>
                <Resultimc messageResultImc = {messageImc} resultImc = {imc} />
            </View>
        </View>
    );
}