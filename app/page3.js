/**
 * File   -  page3.js
 * Credit - Stepehen Graham
 * Author - Raj Rai
 */
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Image, Text, View, Pressable, Button, Alert, FlatList } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/page-styles';
export default function Page3() {

    const params = useLocalSearchParams();
    const { g_Difficulty, p_Name, score, count, currentP, playerTitle } = params;
    const [playerList, setPlayerList] = useState([{ id: 0, name: currentP, scores: 0, time: 0 }])
    const [currentSum, setCurrentSum] = useState([{ title: playerTitle, name: currentP, scores_: score, time: count }])
    const [show, setShow] = useState(false);

    const PressMe = (id) => {
        Alert.alert("Nice", "" + playerList[id].name + playerList[id].id);
        setT(t => t + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>{currentSum[0].title}</Text>
            <View style={styles.item}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: "#ff0000" }}>⭐Personal Best Record⭐</Text>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:"blue" }}>Name: {currentSum[0].name} </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: "green" }}>Score: {currentSum[0].scores_}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: "brown" }}>Time: {currentSum[0].time}s</Text>
            </View>

            <View style={{ alignItems:"center", marginTop:10 }}>
            <Pressable
                style={{backgroundColor: 'orange',
                     borderBlockColor: 'black',
                     borderStyle: 'solid',
                    height: 30,
                    width: 200,
                    justifyContent: 'center',
                    alignItems:'center',
                    borderWidth: 2,
                    borderRadius: 7,
                   }}>
                <Text style={{textAlign:'center', fontSize:17, color:"black"}}>Show Leaderboard</Text>
                </Pressable>
            </View>
            {/*<FlatList */}
            {/*    keyExtractor={(item) => item.id}*/}
            {/*    data={playerList}*/}
            {/*    renderItem={({ item }) => (*/}
            {/*        <Text style={styles.item}>{item.name}</Text>*/}
            {/*    )}*/}
            {/*/>*/}
        </View>
    );

}

