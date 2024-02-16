/**
 * Credit - Stepehen Graham
 * Author - Raj Rai
 */
import { Link } from 'expo-router';
import { StyleSheet, Image, Text, View, Pressable, Button, Alert, Switch} from 'react-native';
import { useState, useEffect } from 'react';
import tile from '../images/tile.jpg';
import point100 from '../images/100.jpg';
import point200 from '../images/200.jpg';
import point400 from '../images/400.jpg';
import point500 from '../images/500.jpg';

import  bomb  from '../images/bomb.jpg';
export default function App() {


    const [score, setScore] = useState(0);
    const [show, setShow] = useState(false);



    const selectBomb = () => {
    const randomIndex = Math.floor(Math.random() * tiles.length);
    const newTiles = [...tiles];
    newTiles[randomIndex] = true;
    setTiles(newTiles);
    }


    const startIt = () => {
        setShow(!show);   
    }

    function resetGame() {
        setScore(0);

        setTiles(new Array(3).fill(false));
    }
    function hitBomb(index) {
        const newTiles = [...tiles];
        newTiles[index] = false;
        setTiles(newTiles);
       
            Alert.alert('Game Over', 'You lost all your lives', [{ text: 'OK', onPress: () => resetGame() }]);
        
    }

    return (
        <View style={styles.container}>
            {/* Instruction */ }
            {
                show ? null :
                    <View style={{ marginTop:160 }}><Text style={styles.instruction}>
                        Instruction: Click on Any Tile. If it is not a bomb, you score some points :)
                        You can quit early to keep your scores but you won't be admired :/
                        There will be some hidden bombs, be careful. You must choose all the bomb-free tiles to win the match:)</Text>
                        </View>
            }

            {/* Score */}
            {
                show ? <View style={{ margin:15}}><Text style={styles.scoreCount}>Score: </Text></View> : null
            }

            {/* Actual Game */}
            {
                show ? <EasyDifficulty /> : null
            }
       
                {
                show ? null : <View style={{ marginBottom: 200, marginLeft: 103, width: 150 }}><Button title="Click to Game" style={styles.item} onPress={() => startIt()} /></View>
                }

     
           
        
   
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '',
        fontSize: 24,

    },
    scoreCount: {
        fontSize: 30,
        color: 'blue',
        
    },
    grid: {
        marginBottom:120,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        margin:-0,
    },
    instruction: {
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 120,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'lightgreen',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 7,
        margin: 10,
        padding: 10,
    },
    buttonText: {
        fontSize: 24,
    }
});

const EasyDifficulty = () => {
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

    const [random, setRandom] = useState(null);

    const [start, setStart] = useState(false);

    const [hasBegun, setHasBegun] = useState(false);



    shuffleBomb = () => {
        let x = Math.floor(Math.random() * 24);
        if (random != x) {
            setRandom(x);
            let temp = tiles;
            temp[x].bomb = true;
            setTiles({ ...temp });
        }
    }
 
    const [pointTile, setPointTile] = useState([point100, point200, point400, point500]);

    const begin = () => {
        shuffleBomb();
        setHasBegun(!hasBegun);
    }


    function givePoints(pos) {
        if (tiles[pos].selected == true && tiles[pos].bomb == false) {
            let temp = tiles;
            temp[pos].image = point100;
            setTiles({ ...temp });
        }
        if (tiles[pos].selected == true && tiles[pos].bomb == true) {
            let temp = tiles;
            temp[pos].image = bomb;
            setTiles({ ...temp });
      
        }
    }

    const isSelected = (pos) => {
        let temp = tiles;
        temp[pos].selected = true;
        setTiles({ ...temp });
        givePoints(pos);
    }

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(0)}><Image source={tiles[0].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(1)}><Image source={tiles[1].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(2)}><Image source={tiles[2].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(3)}><Image source={tiles[3].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(4)}><Image source={tiles[4].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(5)}><Image source={tiles[5].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(6)}><Image source={tiles[6].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(7)}><Image source={tiles[7].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(8)}><Image source={tiles[8].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(9)}><Image source={tiles[9].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(10)}><Image source={tiles[10].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(11)}><Image source={tiles[11].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(12)}><Image source={tiles[12].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(13)}><Image source={tiles[13].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(14)}><Image source={tiles[14].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(15)}><Image source={tiles[15].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(16)}><Image source={tiles[16].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(17)}><Image source={tiles[17].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(18)}><Image source={tiles[18].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(19)}><Image source={tiles[19].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(20)}><Image source={tiles[20].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(21)}><Image source={tiles[21].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(22)}><Image source={tiles[22].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true}onPress={() => isSelected(23)}><Image source={tiles[23].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(24)}><Image source={tiles[24].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(25)}><Image source={tiles[25].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(26)}><Image source={tiles[26].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(27)}><Image source={tiles[27].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(28)}><Image source={tiles[28].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(29)}><Image source={tiles[29].image} style={styles.image} /></Pressable>
                {
                    hasBegun ? null: <View style={{ marginTop: 60, marginLeft: 0, width: 150 }}><Button title="Start The Game" style={styles.item} onPress={() => begin()} /></View>
                }

            </View>
                
        </View>
    )
}


const MediumDifficulty = () => {
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
    ]);

    const [random, setRandom] = useState(null);

    const [start, setStart] = useState(false);

    const [hasBegun, setHasBegun] = useState(false);



    shuffleBomb = () => {
        let x = Math.floor(Math.random() * 24);
        if (random != x) {
            setRandom(x);
            let temp = tiles;
            temp[x].bomb = true;
            setTiles({ ...temp });
        }
    }

    const [pointTile, setPointTile] = useState([point100, point200, point400, point500]);

    const begin = () => {
        shuffleBomb();
        shuffleBomb();
        shuffleBomb();
        setHasBegun(!hasBegun);
    }


    function givePoints(pos) {
        if (tiles[pos].selected == true && tiles[pos].bomb == false) {
            let temp = tiles;
            temp[pos].image = point100;
            setTiles({ ...temp });
        }
        if (tiles[pos].selected == true && tiles[pos].bomb == true) {
            let temp = tiles;
            temp[pos].image = bomb;
            setTiles({ ...temp });

        }
    }

    const isSelected = (pos) => {
        let temp = tiles;
        temp[pos].selected = true;
        setTiles({ ...temp });
        givePoints(pos);
    }

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(0)}><Image source={tiles[0].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(1)}><Image source={tiles[1].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(2)}><Image source={tiles[2].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(3)}><Image source={tiles[3].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(4)}><Image source={tiles[4].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(5)}><Image source={tiles[5].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(6)}><Image source={tiles[6].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(7)}><Image source={tiles[7].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(8)}><Image source={tiles[8].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(9)}><Image source={tiles[9].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(10)}><Image source={tiles[10].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(11)}><Image source={tiles[11].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(12)}><Image source={tiles[12].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(13)}><Image source={tiles[13].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(14)}><Image source={tiles[14].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(15)}><Image source={tiles[15].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(16)}><Image source={tiles[16].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(17)}><Image source={tiles[17].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(18)}><Image source={tiles[18].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(19)}><Image source={tiles[19].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(20)}><Image source={tiles[20].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(21)}><Image source={tiles[21].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(22)}><Image source={tiles[22].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(23)}><Image source={tiles[23].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(24)}><Image source={tiles[24].image} style={styles.image} /></Pressable>

                {
                    hasBegun ? null : <View style={{ marginTop: 60, marginLeft: 0, width: 150 }}><Button title="Start The Game" style={styles.item} onPress={() => begin()} /></View>
                }

            </View>

        </View>
    )
}

const DifficultDifficulty = () => {
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

    ]);

    const [random, setRandom] = useState(null);

    const [start, setStart] = useState(false);

    const [hasBegun, setHasBegun] = useState(false);



    shuffleBomb = () => {
        let x = Math.floor(Math.random() * 24);
        if (random != x) {
            setRandom(x);
            let temp = tiles;
            temp[x].bomb = true;
            setTiles({ ...temp });
        }
    }

    const [pointTile, setPointTile] = useState([point100, point200, point400, point500]);

    const begin = () => {
        shuffleBomb();
        shuffleBomb();
        shuffleBomb();
        shuffleBomb();
        setHasBegun(!hasBegun);
    }


    function givePoints(pos) {
        if (tiles[pos].selected == true && tiles[pos].bomb == false) {
            let temp = tiles;
            temp[pos].image = point100;
            setTiles({ ...temp });
        }
        if (tiles[pos].selected == true && tiles[pos].bomb == true) {
            let temp = tiles;
            temp[pos].image = bomb;
            setTiles({ ...temp });

        }
    }

    const isSelected = (pos) => {
        let temp = tiles;
        temp[pos].selected = true;
        setTiles({ ...temp });
        givePoints(pos);
    }

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(0)}><Image source={tiles[0].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(1)}><Image source={tiles[1].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(2)}><Image source={tiles[2].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(3)}><Image source={tiles[3].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(4)}><Image source={tiles[4].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(5)}><Image source={tiles[5].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(6)}><Image source={tiles[6].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(7)}><Image source={tiles[7].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(8)}><Image source={tiles[8].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(9)}><Image source={tiles[9].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(10)}><Image source={tiles[10].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(11)}><Image source={tiles[11].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(12)}><Image source={tiles[12].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(13)}><Image source={tiles[13].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(14)}><Image source={tiles[14].image} style={styles.image} /></Pressable>

                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(15)}><Image source={tiles[15].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(16)}><Image source={tiles[16].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(17)}><Image source={tiles[17].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(18)}><Image source={tiles[18].image} style={styles.image} /></Pressable>
                <Pressable disabled={hasBegun ? false : true} onPress={() => isSelected(19)}><Image source={tiles[19].image} style={styles.image} /></Pressable>

                {
                    hasBegun ? null : <View style={{ marginTop: 60, marginLeft: 0, width: 150 }}><Button title="Start The Game" style={styles.item} onPress={() => begin()} /></View>
                }

            </View>

        </View>
    )
}