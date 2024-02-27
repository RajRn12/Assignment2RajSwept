/**
 * File   -  page3.js
 * Credit - Stepehen Graham
 * Author - Raj Rai
 */
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Image, Text, View, Pressable, Button, Alert, TextInput } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/page-styles';
export default function Page3() {

    const params = useLocalSearchParams();
    const { p_Name, score, count } = params;
    const [playerList, setPlayerList] = useState([{ name: '', score_: 0, time: 0 }])

    useEffect(() => {
        let i = 0;
        while (i < playerList.length) {
            if (playerList[i].name == p_Name) {
                let temp = playerList;
                temp[i].score_ = score;
                temp[i].time = count;
                setPlayerList({ ...temp });
            }
            else {
                let temp = playerList;
                temp[i].push. = p_Name;
                temp[i].score_ = score;
                temp[i].time = count;
                setPlayerList({ ...temp });
            }
            i++;
        }

    }, [])

    const PressMe = (id) => {
        Alert.alert("Nice", "" + playerList[id].name);
    }
    return (
        <View style={styles.container}>
            <Button title="Testing" onPress={() => PressMe(0) } />
            <Button title="Testing" onPress={() => PressMe(1) } />
        </View>
    );

}

