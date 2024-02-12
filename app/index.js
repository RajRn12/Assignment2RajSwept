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

    const [buttonColor, setBtnColor] = useState(styles.locked);

    const [score, setScore] = useState(0);

    const code = [2]; // this is “secret”

    const clearLock = () => {
        setPressed([]);
        setLocked(true);
        setBtnColor(styles.locked);
    }

    const bombShuffle = (id) => {
        let newBoxes = [false, false, false,false,false];
        newBoxes[Math.floor(Math.random() * 5)] = true;
        setBoxes(newBoxes);
    }

    const keyPress = (btn) => {
        setPressed(prev => [...prev, btn]);
    }

    //check after each key press
    useEffect(() => {
        if (pressed.length === code.length) {
            if (code.every((elem, idx) => elem === pressed[idx])) {
                setLocked(false);
                setBtnColor(styles.unlocked);
            }
            else {
                clearLock();
                // this would be a good place to alert the user
                Alert.alert("Cleared!");
            }
        }
    }, [pressed])


    return (
        <View style={styles.container}>
            <View style={styles.score}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Score: {score}</Text></View>
            <View style={styles.buttonView}>
            <View style={styles.buttonRow}>
                    <Pressable
                        style={[styles.buttonBox, buttonColor,]} onPress={() => bombShuffle()} />
                   
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
        backgroundColor: 'black',
        borderWidth: 2
    },
    locked: { backgroundColor: 'grey', },
    unlocked: { backgroundColor: 'green', },
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