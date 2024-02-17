/**
 * Credit - Stepehen Graham
 * Author - Raj Rai
 */
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Image, Text, View, Pressable, Button, Alert, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import tile from '../images/tile.jpg';
import point100 from '../images/100.jpg';
import point200 from '../images/200.jpg';
import point400 from '../images/400.jpg';
import point500 from '../images/500.jpg';
import clock from '../images/clock.jpg';
import guide from '../images/instruction.jpg';
import styles from '../styles/page-styles';
import bomb from '../images/bomb.jpg';

export default function App() {

    const params = useLocalSearchParams();
    const {gameDifficulty, playerName} = params;

    const [easy, setEasy] = useState(false);
    const [medium, setMedium] = useState(false);
    const [hard, setHard] = useState(false);

    {/* Runs once */}
    useEffect(() => {
        if (gameDifficulty == 'Easy') {
            setEasy(true);
            setMedium(false);
            setHard(false);
         }
         else if (gameDifficulty == 'Medium') {
            setMedium(true);
            setEasy(false);
            setHard(false);
            }
        else {
            setHard(true);
            setEasy(false);
            setMedium(false);
            
        }
    }, []);
    

    return (
        <View style={styles.container}>
            {
                easy ? <EasyDifficulty name={playerName} /> : null
            }
            {/*{*/}
            {/*    medium ? <MediumDifficulty /> : null*/}
            {/*}*/}
            {/*{*/}
            {/*    hard ? <HardDifficulty /> : null*/}
            {/*}*/}
        </View>
    );

}

{/* Easy Difficulty */ }
const EasyDifficulty = ({name}) => {
    const [tiles, setTiles] = useState([
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },

        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },

        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },

        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
        { image: tile, selected: false, bomb: false },
    ]);

    const [p_Name, setP_Name] = useState('');

    const [random, setRandom] = useState(null);

    const [score, setScore] = useState(0);

    const [hasBegun, setHasBegun] = useState(false);

    const [stop, setStop] = useState(false);

    const [bombFound, setBombFound] = useState(false);

    {/* Shuffle Bomb */ }
    shuffleBomb = () => {
        let x = Math.floor(Math.random() * 30);
        if (random != x) {
            setRandom(x);
            let temp = tiles;
            temp[x].bomb = true;
            setTiles({ ...temp });
        }
    }

    {/* Timer */}
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (name != '') {
            setP_Name(name);
        }
        else {
            setP_Name("Unknown");
        }

        if (hasBegun == true && count != 0 && stop != true) {
            const interval = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);

            return () => clearInterval(interval)
        }
    }, [count]);


    const [pointTile, setPointTile] = useState([point100, point200, point400, point500]);

    {/* User cannot select the same tile again or cannot select any tile unless game has begun or if count is 0 */ }
    const disableSelected = (pos) => {
        if (hasBegun == false || tiles[pos].selected == true || count == 0) {
            return true;
        }
    }

    {/* Begin the game - shuffle bomb(s) once and start timer */ }
    const begin = () => {
        shuffleBomb();
        setHasBegun(true);
        setCount(1);
    }

    {/* Change selected tile's image to random points tile's image */ }
    function givePoints(pos) {
        let pointX = Math.floor(Math.random() * 4);
        if (tiles[pos].selected == true && tiles[pos].bomb == false && stop != true) {
            let temp = tiles;
            temp[pos].image = pointTile[pointX];
            setTiles({ ...temp });
            addScore(pos);
        }
        if (tiles[pos].selected == true && tiles[pos].bomb == true && stop != true) {
            let temp = tiles;
            temp[pos].image = bomb;
            setTiles({ ...temp });
            addScore(pos);
            setBombFound(true);

        }
    }

    {/* Increase Score based on points tile's image given to selected tile */ }
    function addScore(pos) {
        if (tiles[pos].image == point100) {
            setScore(score + 100);
        }
        if (tiles[pos].image == point200) {
            setScore(score + 200);
        }
        if (tiles[pos].image == point400) {
            setScore(score + 400);
        }
        if (tiles[pos].image == point500) { 
            setScore(score + 500);
        }

        if (tiles[pos].image == bomb) {
            Alert.alert("Bomb Found: Game Over!!!", "Shame, shame. You couldn't beat the game on easy mode and you missed your chance to become the chicken, too!. Turn off your device immediately, and go play with your dolls!");
            setScore(0);
            setCount(0);
        }
    }

    {/* Call necessary functions on selected tile */ }
    const isSelected = (pos) => {
        let temp = tiles;
        temp[pos].selected = true;
        setTiles({ ...temp });
        givePoints(pos);
    }

    const showGuide = () => {
        Alert.alert("Instruction/Info",
        "Click any bomb-free tile to score random points. You can bail out any time to keep your current scores. Getting the bomb means 'GAME OVER!'. Depending on the chosen difficulty, there may be more than one bomb. So, be careful!!!")
    }

    const [bailout, setBailout] = useState(false);
    {/* Chicken Bail Out */ }
    function bailOut() {
            setStop(true);
            Alert.alert("CHICKEN HAS BEEN FOUND!", "And, it is You!")
            setBailout(true);
    }

    return (
        <View style={styles.container}>
            <View style={{marginLeft: 8,marginTop: 2, padding:0, flexDirection: 'column'}}>
                <Text style={{marginRight: 20, marginTop: 8, color: 'green'} }>Score: {score}</Text>
                <Text style={{color: 'red' }}><Image source={clock} style={styles.clockImage} /> {count}s</Text>
                <Pressable onPress={() => showGuide()}><Image source={guide} style={{ width: 20, height: 20, marginLeft: 2, marginTop: 9 }} /></Pressable>
            </View>

            <View style={styles.grid}>
                <Pressable disabled={disableSelected(0) ? true : false} onPress={() => isSelected(0)}><Image source={tiles[0].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(1) ? true : false} onPress={() => isSelected(1)}><Image source={tiles[1].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(2) ? true : false} onPress={() => isSelected(2)}><Image source={tiles[2].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(3) ? true : false} onPress={() => isSelected(3)}><Image source={tiles[3].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(4) ? true : false} onPress={() => isSelected(4)}><Image source={tiles[4].image} style={styles.image} /></Pressable>

                <Pressable disabled={disableSelected(5) ? true : false} onPress={() => isSelected(5)}><Image source={tiles[5].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(6) ? true : false} onPress={() => isSelected(6)}><Image source={tiles[6].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(7) ? true : false} onPress={() => isSelected(7)}><Image source={tiles[7].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(8) ? true : false} onPress={() => isSelected(8)}><Image source={tiles[8].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(9) ? true : false} onPress={() => isSelected(9)}><Image source={tiles[9].image} style={styles.image} /></Pressable>

                <Pressable disabled={disableSelected(10) ? true : false} onPress={() => isSelected(10)}><Image source={tiles[10].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(11) ? true : false} onPress={() => isSelected(11)}><Image source={tiles[11].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(12) ? true : false} onPress={() => isSelected(12)}><Image source={tiles[12].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(13) ? true : false} onPress={() => isSelected(13)}><Image source={tiles[13].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(14) ? true : false} onPress={() => isSelected(14)}><Image source={tiles[14].image} style={styles.image} /></Pressable>

                <Pressable disabled={disableSelected(15) ? true : false} onPress={() => isSelected(15)}><Image source={tiles[15].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(16) ? true : false} onPress={() => isSelected(16)}><Image source={tiles[16].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(17) ? true : false} onPress={() => isSelected(17)}><Image source={tiles[17].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(18) ? true : false} onPress={() => isSelected(18)}><Image source={tiles[18].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(19) ? true : false} onPress={() => isSelected(19)}><Image source={tiles[19].image} style={styles.image} /></Pressable>

                <Pressable disabled={disableSelected(20) ? true : false} onPress={() => isSelected(20)}><Image source={tiles[20].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(21) ? true : false} onPress={() => isSelected(21)}><Image source={tiles[21].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(22) ? true : false} onPress={() => isSelected(22)}><Image source={tiles[22].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(23) ? true : false} onPress={() => isSelected(23)}><Image source={tiles[23].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(24) ? true : false} onPress={() => isSelected(24)}><Image source={tiles[24].image} style={styles.image} /></Pressable>

                <Pressable disabled={disableSelected(25) ? true : false} onPress={() => isSelected(25)}><Image source={tiles[25].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(26) ? true : false} onPress={() => isSelected(26)}><Image source={tiles[26].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(27) ? true : false} onPress={() => isSelected(27)}><Image source={tiles[27].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(28) ? true : false} onPress={() => isSelected(28)}><Image source={tiles[28].image} style={styles.image} /></Pressable>
                <Pressable disabled={disableSelected(29) ? true : false} onPress={() => isSelected(29)}><Image source={tiles[29].image} style={styles.image} /></Pressable>

                {/* Show when game's not begun */}
                {
                    hasBegun ? null : <View style={{ marginTop: 30, width: 150 }}><Button title="Start The Game" color='green' onPress={() => begin()} /></View>
                }

                {/* Show Player Name */}
                {
                    hasBegun ?
                        <View style={{ marginTop: 12}}>
                            <Text style={{ fontSize: 18 }}>Player Name: {p_Name}</Text>
                            <Button disabled={bombFound? true: false} title="I am Done" style={styles.item} onPress={() => bailOut()} />
                        </View> 
                        : null
                }


                {
                    bailout ?
                        <View style={{ alignItems: 'center', marginTop: 15, padding: 0, }}>
                            <Link
                                style={styles.button}
                                href={{
                                    pathname: "/page3",
                                    params: {
                                        score,
                                        count
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


                {
                    bombFound ?
                        <View style={{ alignItems: 'center', marginTop: 15, padding: 0, }}>
                            <Link
                                style={styles.button}
                                href={{
                                    pathname: "/page3",
                                    params: {
                                        score,
                                        count
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
    )
}
