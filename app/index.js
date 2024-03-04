/**
 * File   -  index.js
 * Credit -  Stepehen Graham
 * Author -  Raj Rai
 */
import { Pressable, Text, TextInput, View, Button, Alert } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import styles from '../styles/page-styles';
import React, { useEffect, useState } from 'react';

export default function Page1() {

    const params = useLocalSearchParams();
    const { oldList } = params;
    const [oldPlayerList, setOldPlayerList] = useState(oldList);

    const [gameDifficulty, setGameDifficulty] = useState('');

    const [selected, setSelected] = useState(false);

    const [proceed, setProceed] = useState(false);

    // reset function
    function reset() {
        setProceed(false);
        setSelected(false);
        onChangePlayerName("");
        setGameDifficulty("");
    }

    // difficulty set
    const isSelected = (difficulty) => {
        if (difficulty != '') {
            setSelected(true);
            setGameDifficulty(difficulty);
        }
    }

    const [playerName, onChangePlayerName] = useState("");

    return (
        <View style={styles.container}>       
            <View style={styles.pageOneView}>
                {/* Instruction */}
                {
                  proceed ? null :
                    <View>
                            <Text style={styles.instructionTitle}>Instruction/Info:</Text>
                        <Text style={styles.instruction}>Click on Any Tile. If it is not a mine, you score random points :)</Text>
                        <Text style={styles.instruction}> You can quit early to keep your scores but you won't be admired :/</Text>
                        <Text style={styles.instruction}>There will be some hidden mines, so be careful!!!</Text>
                        <Text style={styles.instruction}>You must choose all the mine-free tiles to win the game:)</Text>
                        <Text style={styles.criticalInfo}>You must select the game difficulty before you can go to the actual game page.</Text>
                         <Text style={styles.criticalInfo}>On the game page, you must hit 'Start The Game' button to start the game.</Text>
                    </View>
                }

                {/* Proceed Button */}
                {
                    proceed ? null :
                        <View style={styles.proceedBtn}>
                            <Button title="Proceed" color='lightgreen' onPress={() => setProceed(true)} />
                        </View>
                }

                {/* Select proceed to display this info part */}
                {proceed ?
                    <View style={ styles.center}>
                        <Text style={styles.criticalInfo}>You must select the game difficulty before you can go to the actual game page.</Text>
                        <Text style={styles.criticalInfo}>'Name - 8 characters max'</Text>
                        <Text style={[styles.instruction]}>"Name is not required"</Text>
                        <Text style={[styles.instruction]}>(will be set to 'Unkown')</Text>
                        <Text style={styles.criticalInfo}>RESET GAME WILL DELETE CURRENT PLAYERS AND THEIR SCORES</Text>
                    </View>
                    : null
                }

                {/* Select proceed to display the player name input box */}
                {
                  proceed? 
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}> Enter Name: </Text>
                        <TextInput
                            style={styles.input}
                                maxLength={8}
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
                        <View style={styles.difficultyView}>
                            <Text style={styles.difficultyLabel}>Select Game Difficulty: </Text>
                        <Button title="More Tiles" color = 'green' onPress={() => isSelected('MORE TILES')} />
                        <Button title="More Mines" color = 'red' onPress={() => isSelected('MORE MINES')} />
                    </View>
                        : null
                }

                {/* Select proceed to display the current selected difficulty */ }
                {
                    proceed?
                        <Text style={styles.selectedDiff}>Selected Difficulty: {gameDifficulty} </Text>
                    :null
                }

                {/* Back To Instruction Button */}
                {
                    proceed ?
                        <View style={styles.instructionBtn}>
                            <Button title="Back To Instruction" color='orange' onPress={() => setProceed(false)} />
                        </View>
                        : null
                }
               
                {/* Do not Show the button unless the game difficulty has been selected*/}
                {
                    selected && proceed?
                        <View style={styles.gameBtnView}>
                             <Link
                                href={{
                                pathname: "/page2",
                                params: {
                                gameDifficulty,
                                playerName,
                                oldPlayerList
                             }
                            }} asChild
                        >
                             {/* takes to second page upon pressing 'Click To Game Page' button */}
                                <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Game</Text>
                                </Pressable>
                             </Link>
                         </View>
                        : null
                }

                {
                    proceed ?
                        <View style={styles.center}>
                        <Pressable style={styles.resetGameBtn} onPress={() => reset()}>
                            <Text style={styles.buttonText}>Reset Game</Text>
                            </Pressable>
                    </View>
                    : null
                }
            </View>
        </View>
    );

}