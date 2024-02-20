/**
 * Credit - Stepehen Graham, Claire Fleckney, Stack Overflow
 * Author - Raj Rai
 */
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Image, Text, View, Pressable, Button, Alert, TextInput } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import tile from '../images/tile.jpg';
import point100 from '../images/100.jpg';
import point200 from '../images/200.jpg';
import point400 from '../images/400.jpg';
import point500 from '../images/500.jpg';
import clock from '../images/clock.jpg';
import guide from '../images/instruction.jpg';
import styles from '../styles/page-styles';
import mine from '../images/mine.jpg';

export default function App() {

    const params = useLocalSearchParams();
    const {gameDifficulty, playerName} = params;

    return (
        <View style={styles.container}>
            <MainGame name={playerName} difficulty={gameDifficulty} />
        </View>
    );

}

{/* Easy Difficulty */ }
const MainGame = ({ name , difficulty }) => {
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

    const [p_Name, setP_Name] = useState('');

    const [g_Difficulty, setG_Difficulty] = useState('');

    const [moreTiles, setMoreTiles] = useState(false);

    const [moreMines, setMoreMines] = useState(false);

    const [random, setRandom] = useState(null);

    const [score, setScore] = useState(0);

    const [hasBegun, setHasBegun] = useState(false);

    const [stop, setStop] = useState(false);

    const [mineFound, setmineFound] = useState(false);

    const [num_GoodTile, setNum_GoodTile] = useState(0);

    const [win, setWin] = useState(false);

    {/* Timer */ }
    {/* Set Player Name as Unkown if name's not entered */ }
    const [count, setCount] = useState(0);
    const timer = useRef(null);
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

        // Name
        if (name != '') {
            setP_Name(name);
        }
        else {
            setP_Name("Unknown");
        }
        if (hasBegun == true && count != 0 && win != true) {
            timer.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
            isWin();
            return () => clearInterval(timer.current)

        }
    }, [count]);

    const stopTimer = () => {
        clearInterval(timer.current);
    };

    { /* check Win */ }
    { /* Time stops a second later so the substraction is needed */ }
    const isWin = () => {
        if (countGood != 0 && countGood == num_GoodTile && mineFound != true) {
            Alert.alert("You Won: You beat the Game", "You are the greatest player ever!!!");
            setWin(true);
            stopTimer();
            setCount(c => c - 1);
        }
    }

    {/* Begin the game - shuffle mine(s) once and set count to 1 for starting time with useEffect */ }
    {/* Record # of good tiles for determining the win */}
    const begin = () => {
        if (moreMines != true) {
            shufflemine();
            shufflemine();
            shufflemine();
        }
        else {
            shufflemine();
            shufflemine();
            shufflemine();
            shufflemine();
        }
        checkGoodTile();
        setHasBegun(true);
        setCount(1);
    }

    {/* Shuffle mine - One mine For Easy Difficulty */ }
    const shufflemine = () => {
        let x = 0;
        if (moreMines != true) {
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

    {/* Record # of good tiles and substract it if one of 'em is the mine */}
    const checkGoodTile = () => {
        if (moreMines != true) {
            setNum_GoodTile(tiles.length);
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

    const [pointTile, setPointTile] = useState([point100, point200, point400, point500]);

    {/* User cannot select the same tile again or cannot select any tile unless game has begun, not bailed out, mine not found */ }
    const disableSelected = (pos) => {
        if (hasBegun == false || tiles[pos].selected == true || stop == true || mineFound == true) {
            return true;
        }
    }

    {/* Change selected tile's image to random points tile's image or mine if chosen during shuffle */ }
    {/* If selected tile is not mine, increase countGood value by 1 for determining the win */}
    const [countGood, setCountGood] = useState(0);
    function givePoints(pos) {     
        let pointX = Math.floor(Math.random() * 4);
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
            addScore(pos);
            setmineFound(true);
        }
    }

    {/* Increase Score based on points tile's image given to selected tile - alert, reset score and time once mine's found */ }
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

        if (tiles[pos].image == mine) {
            Alert.alert("Mine Found: Game Over!!!", "Shame, shame. You couldn't beat the game and you missed your chance to become the chicken, too!. Turn off your device immediately, and go play with a toy!");
            setScore(0);
            setCount(0);
            stopTimer();
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
        "Click any mine-free tile to score random points. You can quit any time to keep your current scores. Getting a mine means 'GAME OVER!'. Depending on the chosen difficulty, there may be more than 3 mines. So, be careful!!!")
    }

    const [bailout, setBailout] = useState(false);
    {/* Chicken Bail Out */ }
    function bailOut() {
            setStop(true);
            Alert.alert("CHICKEN HAS BEEN FOUND!", "And, it's YOU!")
            setBailout(true);
            stopTimer();
    }

    return (
        <View style={styles.container}>
            {/* Score, timer, guide button */}
            <View style={{ marginLeft: 24, marginTop: 2, padding: 0, flexDirection: 'column' }}>
                <Text style={{marginRight: 20, marginTop: 8, color: 'green'} }>Score: {score}</Text>
                <Text style={{color: 'purple' }}><Image source={clock} style={styles.clockImage} /> {count}s</Text>
                <Pressable onPress={() => showGuide()}><Image source={guide} style={{ width: 20, height: 20, marginLeft: 2, marginTop: 9 }} /></Pressable>
            </View>

            {/* Player's name, difficulty */}
            <View style={{ marginLeft: 24, padding: 0, flexDirection: 'row' }}>
                <Text style={{ marginRight: 20, marginTop: 8, color: 'black' }}>Name: <Text style={{ color: 'blue' }}>{p_Name}</Text></Text>
                <Text style={{ marginRight: 20, marginTop: 8, color: 'black' }}>Difficulty: <Text style={{ color: moreMines? 'red':'green' }}>{g_Difficulty}</Text></Text>
            </View>

            {/* Tile grid in form of images  */}
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
                    hasBegun ? null : <View style={{ marginTop: 30, width: 150 }}><Button title="Start The Game" color='green' onPress={() => begin()} /></View>
                }

                {/* Show bailout button, disable it once mine's found  */}
                {
                    hasBegun ?
                        <View style={{ marginTop: 15, marginLeft:1, width: 200 }}>
                            <Button disabled={mineFound ? true : false} title="I Quit" style={styles.item} onPress={() => bailOut()} />
                        </View>
                        : null
                }

                {/* Show link button to next page once bailout button's been pressed */}
                {
                    bailout ?
                        <View style={{ marginTop: 15, marginLeft: 204, marginRight: 305 }}>
                            <Link
                                style={styles.button}
                                href={{
                                    pathname: "/page3",
                                    params: {
                                        p_Name,
                                        score,
                                        count
                                    }
                                }} asChild
                            >
                                {/* takes to second page upon pressing 'Click To Game Page' button */}
                                <Pressable style={styles.button}>
                                    <Text style={styles.buttonText}>Summary</Text>
                                </Pressable>
                            </Link>
                        </View>
                        : null
                }

                {/* Show link button to next page once mine's found */}
                {
                    mineFound ?
                        <View style={{ marginTop: 15, marginLeft: 204, marginRight: 305 }}>
                            <Link
                                style={styles.button}
                                href={{
                                    pathname: "/page3",
                                    params: {
                                        p_Name,
                                        score,
                                        count
                                    }
                                }} asChild
                            >
                                {/* takes to second page upon pressing 'Click To Game Page' button */}
                                <Pressable style={styles.button}>
                                    <Text style={styles.buttonText}>Summary</Text>
                                </Pressable>
                            </Link>
                        </View>
                        : null
                }
           

            </View>

        </View>
    )
}
