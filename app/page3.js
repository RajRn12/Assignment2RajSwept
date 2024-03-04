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
    const [playerList, setPlayerList] = useState([{ id: 0, name: currentP, scores: score, time: count }])
    const [currentSum, setCurrentSum] = useState([{ title: playerTitle, name: currentP, scores_: score, time: count }])
    const [pBRLabel, setPBRLabel] = useState('⭐Good Work⭐')
    const [show, setShow] = useState(false);

    function showIt() {
        if (show == true) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.pTitle}>{currentSum[0].title}</Text>
            <View style={styles.currentStat}>
                <Text style={styles.pBR}>{pBRLabel}</Text>
                <Text style={{ }}>Name: {currentSum[0].name} </Text>
                <Text style={styles.pScore}>Score: {currentSum[0].scores_}pts</Text>
                <Text style={styles.pTime}>Time: {currentSum[0].time}s</Text>
            </View>

            <View style={styles.leaderView}>
                <Pressable
                    style={styles.leaderPressable} onPress={showIt}>
                    <Text style={styles.leaderText}>Show Leaderboard</Text>
                </Pressable>
            </View>

            {show ?
                <View style={styles.center}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={playerList}
                        renderItem={({ item }) => (
                            <Text style={styles.item}>{item.name}           {item.scores}pts           {item.time}s</Text>
                    )}
                    />
                </View>
                : null
            }

            {show ? null :
                <View style={styles.center}>
                    <Link
                        href={{
                            pathname: "/",
                            params: {
                            }
                        }} asChild
                    >
                        {/* takes to second page upon pressing 'Click To Game Page' button */}
                        <Pressable style={styles.playNewBtn}>
                            <Text style={styles.buttonText}>Play As New Player</Text>
                        </Pressable>
                    </Link>
                </View>
            }
        </View>
    );

}

