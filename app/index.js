/**
 * File   -  index.js
 * Author -  Raj Rai
 */
import { Pressable, Text, TextInput, View, Button } from 'react-native';
import { Link } from 'expo-router'
import styles from '../styles/page-styles';
import React, { useState } from 'react';

export default function Page1() {

    const [gameDifficulty, setGameDifficulty] = useState('');

    const [selected, setSelected] = useState(false);

    const [proceed, setProceed] = useState(false);

    const isSelected = (difficulty) => {
        if (difficulty != '') {
            setSelected(true);
            setGameDifficulty(difficulty);
        }
    }

    const [playerName, onChangePlayerName] = useState("");


    {/* Get Initials */ }

    return (
        <View style={styles.container}>       
            <View style={{ marginTop: 6, marginLeft: 5 }}>
                {/* Instruction */}
                {
                  proceed ? null :
                    <View>
                        <Text style={{fontSize: 24, fontWeight:'bold'}}>Instruction/Info:</Text>
                        <Text style={styles.instruction}>Click on Any Tile. If it is not a mine, you score random points :)</Text>
                        <Text style={styles.instruction}> You can quit early to keep your scores but you won't be admired :/</Text>
                        <Text style={styles.instruction}>There will be some hidden mines, so be careful!!!</Text>
                        <Text style={styles.instruction}>You must choose all the mine-free tiles to win the game:)</Text>
                        <Text style={[styles.instruction, {color: 'red'}]}>You must select the game difficulty before you can go to the actual game page.</Text>
                            <Text style={[styles.instruction, { color: 'red' }]}>On the game page, you must hit 'Start The Game' button to start the game.</Text>
                    </View>
                }

                {/* Proceed Button */}
                {
                    proceed ? null :
                        <View style={{ marginTop: 25, marginLeft: 78, padding: 0, width: 200 }}>
                            <Button title="Proceed" color='lightgreen' onPress={() => setProceed(true)} />
                        </View>
                }

                {/* Select proceed to display this info part */}
                {proceed ?
                    <View>
                        <Text style={[styles.instruction, { color: 'red', fontWeight: 'bold' }]}>You must select the game difficulty before you can go to the actual game page.</Text>
                        <Text style={[styles.instruction, { color: 'red'}]}>'Name will be set to its initials'</Text>
                        <Text style={[styles.instruction]}>"Name is not required"</Text>
                        <Text style={[styles.instruction]}>(will be set to initial 'U.' for Word 'Unkown')</Text>
                    </View>
                    : null
                }

                {/* Select proceed to display the player name input box */}
                {
                  proceed? 
                 <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 20, }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 8, }}> Enter Name: </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePlayerName}
                            value={playerName}
                            placeholder={""}
                            />
                        </View>
                 : null 
                }
                
                {/* Select proceed to display the list of difficulties to choose from*/}
                {
                    proceed ?
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, padding: 0, width: 200 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Select Game Difficulty: </Text>
                        <Button title="More Tiles" color = 'green' onPress={() => isSelected('MORE TILES')} />
                        <Button title="More Mines" color = 'red' onPress={() => isSelected('MORE MINES')} />
                    </View>
                        : null
                }

                {/* Select proceed to display the current selected difficulty */ }
                {
                    proceed?
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 15 }}>Selected Difficulty: {gameDifficulty} </Text>
                    :null
                }

                {/* Back To Instruction Button */}
                {
                    proceed ?
                        <View style={{ marginTop: 25, width: 200, marginLeft:80 }}>
                            <Button title="Back To Instruction" color='orange' onPress={() => setProceed(false)} />
                        </View>
                        : null
                }
               
                {/* Do not Show the button unless the game difficulty has been selected*/}
                {
                    selected ?
                        <View style={{ alignItems: 'center', marginTop: 25,padding: 0, }}>
                    <Link
                        style={styles.button}
                    href={{
                        pathname: "/page2",
                        params: {
                            gameDifficulty,
                            playerName
                        }
                    }} asChild
                >
                                {/* takes to second page upon pressing 'Click To Game Page' button */}
                                <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Game{'\n'}</Text>
                    </Pressable>
                        </Link>
                </View>
                : null
                }

            </View>
        </View>
    );

}