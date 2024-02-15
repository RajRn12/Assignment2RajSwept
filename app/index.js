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
import { Link } from 'expo-router'


import  bomb  from '../images/bomb.jpg';
export default function App() {


    const [score, setScore] = useState(0);
    const [show, setShow] = useState(true);
    const [start, setStart] = useState(false);


    const selectBomb = () => {
    const randomIndex = Math.floor(Math.random() * tiles.length);
    const newTiles = [...tiles];
    newTiles[randomIndex] = true;
    setTiles(newTiles);
    }

    const startIt = () => {
        setShow(!show);
        setStart(true);    
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
                    <Text style={styles.instruction}>
                        Instruction: Click on Any Tile. If it is not a bomb, you score some points :)
                        You can quit early to keep your scores but you won't be admired :/
                        There will be some hidden bombs, be careful. You must choose all the bomb-free tiles to win the match:)</Text>

            }

            {/* Score */}
            {
                show ? <Text style={styles.scoreCount}>Score: </Text> : null
            }

            {/* Actual Game */}
            {
                show ? <User /> : null
            }
            <View>
                {
                  show? null: <Button title="Start" style={styles.item} onPress={() => startIt()} />
                }
                {
                    show ? <Button title="I am Done" style={styles.item} onPress={() => startIt()} /> : null
                }
            </View>
           
        
                <Link
                    style={Styles.makeButton}
                    href={{
                        pathname: "/page2",
                        params: {
                            name,
                            noun,
                            event,
                            date_Label,
                            date_Month,
                            date_Day,
                            date_Year
                        }
                    }} asChild
                >
                    {/* takes to second page upon pressing 'Make Pass' button */}
                    <Pressable>
                        <Text style={Styles.makeButtonText}>Make Pass {'\n'}</Text>
                    </Pressable>
                </Link>
            
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        margin: 20,
    },
    instruction: {
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 120,
        textAlign: 'center',
    }
});

const User = () => {
    const [tiles, setTiles] = useState([
        { id: 0, image:tile,good: true },
        { id: 1, image:tile, good: true }
    ]);

    const [pointTile, setPointTile] = useState([point100, point200, point400, point500]);

    const givePoints = () => {
        setTiles(tiles[0].image);
    }
    const isSelected = () => {
        Alert.alert("Bomb!");
    }

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => givePoints()}><Image source={tiles[0].image} style={styles.image} /></Pressable>
                    </View>
                
          
        </View>
    )
}