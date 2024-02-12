/**
 * Credit - Stepehen Graham
 * Author - Raj Rai
 */
import { Link } from 'expo-router';
import { StyleSheet, Text, View, Pressable, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';


export default function App() {
    const [pressed, setPressed] = useState([]);
    const [locked, setLocked] = useState(true);

    [buttonBoxes, setButtonBoxes] = useState([true, false])

     shuffle = () => {
        let newBoxes = [false, false];
        newBoxes[Math.floor(Math.random() * 2)] = true;
        setButtonBoxes(newBoxes);
    }

     const [isGood, SetIsGood] = useState(false);

    const isItGood = (numb) => {
        if (buttonBoxes[numb] != true) {
            SetIsGood(true);
        }
        else {
            Alert.alert("Bomb");
            SetIsGood(false);
        }
    }

    
    const [score, setScore] = useState(0);

    const clearLock = () => {
        setPressed([]);
        setLocked(true);
      
    }

 


    return (
        <View style={styles.container}>
            <View style={styles.score}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Score: {score}</Text></View>
            <View style={styles.buttonView}>
            <View style={styles.buttonRow}>
                    <Pressable
                        style={[styles.buttonBox]} onPress={() => isItGood(0)} backgroundColor={isGood[0] ? "green" : "red"} />
                    <Pressable
                        style={[styles.buttonBox]} onPress={() => isItGood(1)} backgroundColor={isGood[1] ? "green" : "red"} />
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button
                    onPress={clearLock}
                    title="Start" />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
    },
    buttonBox: {
        height: 70,
        width: 70,
        borderRadius: 5,
        margin:0,
        padding:0,

        borderWidth: 2
    },
 
    score: {
        marginBottom: 15,
        justifyContent: 'center',
    },
    buttonView: {
        marginTop: 30,
        marginBottom:230,
        height: 40,
        width: 100,
    },
    selectedBomb: {
        backgroundColor: 'red'
    }
});