import { Pressable, Text, View, Button} from 'react-native';
import { Link } from 'expo-router'
import styles from '../styles/page-styles';
import React, { useState } from 'react';

export default function Page() {

    const [gameDifficulty, setGameDifficulty] = useState('');

    const [selected, setSelected] = useState(false);

    const isSelected = (difficulty) => {
        if (difficulty != null) {
            setSelected(true);
            setGameDifficulty(difficulty);
        }
        else {
            setSelected(!selected);
        }
    }

    return (
        <View style={styles.container}>
            {/* Instruction */}
            
            <View style={{ marginTop: 6, marginLeft: 5}}>
                <Text style={{fontSize: 24, fontWeight:'bold'}}>Instruction:</Text>
                <Text style={styles.instruction}>Click on Any Tile. If it is not a bomb, you score points :)</Text>
                <Text style={styles.instruction}> You can quit early to keep your scores but you won't be admired :/</Text>
                <Text style={styles.instruction}>There will be some hidden bombs, be careful. You must choose all the bomb-free tiles to win the game:)</Text>
                <Text style={styles.instruction}>You must select the game difficulty before you can go to the actual game page.</Text>
                <Text style={styles.instruction}>On the game page, you must hit 'Start The Game' button to start the game.</Text>
                <Text style={[styles.instruction, {fontWeight:'bold', color:'red'}]}>The number of bombs increases as the difficulty increases.</Text>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, padding: 0, width: 200 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Select Game Difficulty: </Text>
                <Button title="Easy" onPress={() => isSelected('Easy')} />
                <Button title="Medium" onPress={() => isSelected('Medium')} />
                <Button title="Hard" onPress={() => isSelected('Hard')} />
            </View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>Selected Difficulty: {gameDifficulty} </Text>
            {/* Do not Show the button unless the game difficulty has been selected*/ }
            {
                    selected ?
                        <View style={{ alignItems: 'center', marginTop: 25, marginRight:10, padding: 0, }}>
                    <Link
                        style={styles.button}
                    href={{
                        pathname: "/page2",
                        params: {
                            gameDifficulty
                        }
                    }} asChild
                >
                                {/* takes to second page upon pressing 'Click To Game Page' button */}
                                <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Cick To Game Page {'\n'}</Text>
                    </Pressable>
                        </Link>
                </View>
                : null
            }
            </View>
        </View>
    );

}