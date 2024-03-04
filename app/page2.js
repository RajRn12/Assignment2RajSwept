/**
 * File   -  page2.js
 * Credit - Stepehen Graham, Claire Fleckney, Stack Overflow
 * Author - Raj Rai
 */
import { Link, useLocalSearchParams } from 'expo-router';
import { Image, Text, View, Pressable, Button, Alert} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import tile from '../images/tile.jpg';
import point100 from '../images/100.jpg';
import point200 from '../images/200.jpg';
import point400 from '../images/400.jpg';
import point500 from '../images/500.jpg';
import point800 from '../images/800.jpg';
import point1000 from '../images/1000.jpg';
import clock from '../images/clock.jpg';
import guide from '../images/instruction.jpg';
import styles from '../styles/page-styles';
import mine from '../images/mine.jpg';

export default function Page2() {

    const params = useLocalSearchParams();
    const {gameDifficulty, playerName, replay} = params;

    return (
        <View style={styles.container}>
            <MainGame name={playerName} difficulty={gameDifficulty} />
        </View>
    );

}

// Main Game 
const MainGame = ({ name, difficulty }) => {
    const [tiles, setTiles] = useState([
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },

        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },

        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },

        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
        { image: tile, selected: false, mine: false },
    ]);

    const [g_Difficulty, setG_Difficulty] = useState('');

    const [playerTitle, setPlayerTitle] = useState('');

    const [moreTiles, setMoreTiles] = useState(false);

    const [moreMines, setMoreMines] = useState(false);

    const [score, setScore] = useState(0);

    const [stop, setStop] = useState(false);

    const [mineFound, setmineFound] = useState(false);

    const [disableBailout, setDisableBailout] = useState(false);

    const [playedMusic, setPlayedMusic] = useState(false);

    // reset Tiles
    function resetTiles() {
        let newTile = {...tiles};
        newTile[0].image = tile; newTile[0].selected = false; newTile[0].mine = false;
        newTile[1].image = tile; newTile[1].selected = false; newTile[1].mine = false;
        newTile[2].image = tile; newTile[2].selected = false; newTile[2].mine = false;
        newTile[3].image = tile; newTile[3].selected = false; newTile[3].mine = false;
        newTile[4].image = tile; newTile[4].selected = false; newTile[4].mine = false;
        newTile[5].image = tile; newTile[5].selected = false; newTile[5].mine = false;
        newTile[6].image = tile; newTile[6].selected = false; newTile[6].mine = false;
        newTile[7].image = tile; newTile[7].selected = false; newTile[7].mine = false;
        newTile[8].image = tile; newTile[8].selected = false; newTile[8].mine = false;
        newTile[9].image = tile; newTile[9].selected = false; newTile[9].mine = false;

        newTile[10].image = tile; newTile[10].selected = false; newTile[10].mine = false;
        newTile[11].image = tile; newTile[11].selected = false; newTile[11].mine = false;
        newTile[12].image = tile; newTile[12].selected = false; newTile[12].mine = false;
        newTile[13].image = tile; newTile[13].selected = false; newTile[13].mine = false;
        newTile[14].image = tile; newTile[14].selected = false; newTile[14].mine = false;
        newTile[15].image = tile; newTile[15].selected = false; newTile[15].mine = false;
        newTile[16].image = tile; newTile[16].selected = false; newTile[16].mine = false;
        newTile[17].image = tile; newTile[17].selected = false; newTile[17].mine = false;
        newTile[18].image = tile; newTile[18].selected = false; newTile[18].mine = false;
        newTile[19].image = tile; newTile[19].selected = false; newTile[19].mine = false;

        newTile[20].image = tile; newTile[20].selected = false; newTile[20].mine = false;
        newTile[21].image = tile; newTile[21].selected = false; newTile[21].mine = false;
        newTile[22].image = tile; newTile[22].selected = false; newTile[22].mine = false;
        newTile[23].image = tile; newTile[23].selected = false; newTile[23].mine = false;
        newTile[24].image = tile; newTile[24].selected = false; newTile[24].mine = false;
        newTile[25].image = tile; newTile[25].selected = false; newTile[25].mine = false;
        newTile[26].image = tile; newTile[26].selected = false; newTile[26].mine = false;
        newTile[27].image = tile; newTile[27].selected = false; newTile[27].mine = false;
        newTile[28].image = tile; newTile[28].selected = false; newTile[28].mine = false;
        newTile[29].image = tile; newTile[29].selected = false; newTile[29].mine = false;

        setTiles(newTile);
    }

    // Play Again
    const [playA, setPlayA] = useState(false);
    function playAgain() {
        resetTiles();
        setPlayA(true);

        stopSound();
        setCount(null);
        setScore(0);
        setCountGood(0);
        setNum_GoodTile(0);
        setBeginNum(0);

        setHasBegun(false);
        setStop(false);
        setBailout(false);
        setDisableBailout(false);
        setWin(false);
        setmineFound(false);      
        setRandom(null);
    }

    // Set Player Name as Unkown if name's not entered
    // difficulty
    const [currentP, setCurrentP] = useState('');
    // Render once
    useEffect(() => {
        // Difficulty
        if (difficulty == 'MORE TILES') {
            setMoreTiles(true);
            setG_Difficulty('MORE TILES');
        }
        else {
            setMoreMines(true);
            setG_Difficulty('MORE MINES')
        }

        if (name != '') {
            setCurrentP(name);
        }

        if (name == '') {
            setCurrentP('Unkown');
        }
    }, [])

    // Audio File
    const [myPBO, setMyPBO] = useState(null);
    const kalimba = require('../assets/sfx/kalimba.mp3');
    const chicken = require('../assets/sfx/chicken.mp3');

    // load a sound
    const loadSound = async (uri) => {
        const { sound } = await Audio.Sound.createAsync(uri);
        setMyPBO(sound);
    }
    // play a sound
    const playSound = async () => {
        try {
            await myPBO.playAsync();
            setPlayedMusic(true);
        } catch (e) {
            console.log(e)
        };
    }

    // stop a sound
    const stopSound = async () => {
        await myPBO.stopAsync();
        setPlayedMusic(false);
    }
    // unload a sound
    const unloadSound = async () => {
        await myPBO.unloadAsync();
    }

    // starting music
    const [beginNum, setBeginNum] = useState(0);
    useEffect(() => {
        if (beginNum == 0) {
            loadSound(kalimba);
        }
        if (stop != true && beginNum == 1) {
            playSound();
        }
        return myPBO
            ? () => {
                unloadSound
            }
            : undefined;

    }, [beginNum])

    // Chicken Noise
    const [bail, setBail] = useState(0);
    useEffect(() => {
        if (bail > 0) {
            //unloadSound();
            //loadSound(chicken);
        }
        return myPBO
            ? () => {
                unloadSound
            }
            : undefined;
    }, [bail])

    // Timer
    const [count, setCount] = useState(null);
    const timer = useRef(null);
    useEffect(() => {
        if (hasBegun == true && stop != true && playA == false) {
            timer.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
            isWin();
            return () => {
                clearInterval(timer.current);
            }
        }
    }, [count]);

    useEffect(() => {
        if (playA == true && hasBegun == true && stop != true) {
            timer.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
            isWin();
            return () => {
                clearInterval(timer.current);
            }
        }
    }, [ playA , count ]);

    const stopTimer = () => {
        clearInterval(timer.current);
    };


    // Instruction and some info
    const showGuide = () => {
        Alert.alert("Instruction/Info",
            "Click any mine-free tile to score random points. You can quit any time to keep your current scores. Be careful, there are mines hidden! Getting a mine means 'GAME OVER!'. You can stop music or play music. Lastly, you can play again as current player")
    }

    // Begin the game - shuffle mine(s) once and set count to 1 for starting time with useEffect
    // Record # of good tiles for determining the win
    const [hasBegun, setHasBegun] = useState(false);
    const begin = () => {
        setBeginNum(beginNum => beginNum + 1);
        if (moreMines == true) {
            shuffleMine();
            shuffleMine();
            shuffleMine();
            shuffleMine();
        } else {
            shuffleMine();
            shuffleMine();
            shuffleMine();
        }
        checkGoodTile();
        setHasBegun(true);
        setCount(0);
    }

    // Shuffle mine - Different # of mines depending on game difficulty
    const [random, setRandom] = useState(null);
    const shuffleMine = () => {
        let x = 0;
        if (moreTiles == true) {
            x = Math.floor(Math.random() * 30);
        }
        else {
            x = Math.floor(Math.random() * 25);
        }
        if (random != x) {
            setRandom(x);
            let temp = tiles;
            temp[x].mine = true;
            setTiles({ ...temp });
        }
    }

    // User cannot select the same tile again or cannot select any tile unless game has begun, or stop not true
    const disableSelected = (pos) => {
        if (hasBegun == false || tiles[pos].selected == true || stop == true) {
            return true;
        }
    }

    // Record # of good tiles and substract it if one of 'em is the mine
    const [num_GoodTile, setNum_GoodTile] = useState(0);
    const checkGoodTile = () => {
        if (moreMines != true) {
            setNum_GoodTile(30);
        }
        else {
            setNum_GoodTile(25);
        }
        for (var key in tiles) {
            if (tiles[key].mine == true) {
                setNum_GoodTile(num_GoodTile => num_GoodTile - 1);
            }
        }
    }

    // Call necessary functions on selected tile
    const isSelected = (pos) => {
        let temp = tiles;
        temp[pos].selected = true;
        setTiles({ ...temp });
        givePoints(pos);
    }

    // Change selected tile's image to random points tile's image or mine if chosen during shuffle
    // If selected tile is not mine, increase countGood value by 1 for determining the win
    const [pointTile, setPointTile] = useState([point100, point200, point400, point500, point800, point1000]);
    const [countGood, setCountGood] = useState(0);
    function givePoints(pos) {     
        let pointX = Math.floor(Math.random() * 6);
        if (tiles[pos].selected == true && tiles[pos].mine == false) {
            let temp = tiles;
            temp[pos].image = pointTile[pointX];
            setTiles({ ...temp });
            addScore(pos);
            setCountGood(cg => cg + 1);
            isWin(countGood);
        }
        if (tiles[pos].selected == true && tiles[pos].mine == true) {
            let temp = tiles;
            temp[pos].image = mine;
            setTiles({ ...temp });
            setmineFound(true);

            setPlayerTitle("Loser💀");
            stopTimer();
            setStop(true);
            Alert.alert("Mine Found: You Lost!!!", "Shame, shame. You couldn't beat the game and you missed your chance to become the chicken, too!. Turn off your device immediately, and go play with a toy!");
            setScore(0);
            setCount(0);
            setDisableBailout(true);
        }
    }

    // Increase Score by number based on points tile's image given to selected tile - alert, reset score and time once mine's found
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
        if (tiles[pos].image == point800) {
            setScore(score + 800);
        }
        if (tiles[pos].image == point1000) {
            setScore(score + 1000);
        }
    }

    // Check Win
    // Time stops a second later so the substraction is needed
    const [win, setWin] = useState(false);
    const isWin = () => {
        if (countGood != 0 && countGood == num_GoodTile && mineFound != true) {
            setPlayerTitle('Winner🏆');
            setStop(true);
            stopTimer();
            Alert.alert("You Won: You beat the Game", "You are the greatest player ever!!!");
            setWin(true);
            setDisableBailout(true);
            setCount(c => c - 1);
        }
    }

    // Chicken Bail Out
    const [bailout, setBailout] = useState(false);
    function bailOut() {
        setBail(1);
        setPlayerTitle("Chicken🐔");
        setStop(true);
        stopTimer();
        setBailout(true);
        setDisableBailout(true);
        Alert.alert("CHICKEN HAS BEEN FOUND!", "And, it's YOU!")
    }

    return (
        <View style={styles.container}>

            {/* Score, timer, guide button */}
            <View style={styles.statView}>
                <Text style={styles.score}>Score: {score}pts</Text>
                <Text style={{color: 'purple' }}><Image source={clock} style={styles.clockImage} /> {count}s</Text>
                <Pressable style={{ width: 20 }} onPress={() => showGuide()}><Image source={guide} style={styles.guide} /></Pressable>
            </View>

            {/* Player's name, difficulty */}
            <View style={styles.matchInfoView}>
                <Text style={styles.matchInfo}>Name: <Text style={{ color: 'blue' }}>{currentP}</Text></Text>
                <Text style={styles.matchInfo}>Difficulty: <Text style={{ color: moreMines ? 'red' : 'green' }}>{g_Difficulty}</Text></Text>
                { playedMusic?
                <Pressable
                    style={styles.toggleMusic}
                    onPress={stopSound}
                >
                        <Text style={styles.toggleText}>
                            Stop ♬
                    </Text>
                </Pressable>
                :
                    <Pressable
                        style={styles.toggleMusic}
                        onPress={playSound}
                    >
                        <Text style={styles.toggleText}>
                            Play ♬
                        </Text>
                    </Pressable>
                }
            </View>

            {/* Tile grid in form of images - And Other Stuff */}
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

                {moreTiles ?
                    <View style={{flexDirection: 'row'}}>    
                    <Pressable disabled={disableSelected(25) ? true : false} onPress={() => isSelected(25)}><Image source={tiles[25].image} style={styles.image} /></Pressable>
                    <Pressable disabled={disableSelected(26) ? true : false} onPress={() => isSelected(26)}><Image source={tiles[26].image} style={styles.image} /></Pressable>
                    <Pressable disabled={disableSelected(27) ? true : false} onPress={() => isSelected(27)}><Image source={tiles[27].image} style={styles.image} /></Pressable>
                    <Pressable disabled={disableSelected(28) ? true : false} onPress={() => isSelected(28)}><Image source={tiles[28].image} style={styles.image} /></Pressable>
                    <Pressable disabled={disableSelected(29) ? true : false} onPress={() => isSelected(29)}><Image source={tiles[29].image} style={styles.image} /></Pressable>
                 </View>
                : null
            }
                {/* Show when game's not begun */}
                {
                    hasBegun ? null : <View style={styles.startView}><Button title="Start The Game" color='green' onPress={() => begin()} /></View>
                }

                {/* Show bailout button, disable it once mine's found  */}
                {
                    hasBegun ?
                        <View style={styles.bailoutView}>
                            <Button disabled={disableBailout ? true : false} title="I Quit" onPress={() => bailOut()} />
                        </View>
                        : null
                }

                {/* Show link button to next page once bailout button's been pressed */}
                {
                    bailout || win || mineFound ?
                        <View style={styles.linkView}>
                            <Button title="Play 🔁" onPress={() => playAgain()} color='blue' />
                            <Link
                                href={{
                                    pathname: "/page3",
                                    params: {
                                        g_Difficulty,
                                        currentP,
                                        playerTitle,
                                        score,
                                        count
                                    }
                                }} asChild
                            >
                                {/* takes to second page upon pressing 'Click To Game Page' button */}
                                <Pressable style={styles.button} onPress={ () => stopSound()}>
                                    <Text style={styles.buttonText}>Result</Text>
                                </Pressable>
                            </Link>
                        </View>
                        : null
                }

            </View>

        </View>
    )
}
