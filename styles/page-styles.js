/**
 * File   -  page-styles.js
 * Author - Raj Rai
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: ''
        
    },
    currentStat: {
        marginTop: 15,
        padding: 20,
        backgroundColor: 'pink',
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        borderWidth: 1,
        alignItems: 'center',
        borderStyle:'dashed'
    },

    item: {
        marginTop: 5,
        padding: 20,
        backgroundColor: 'lightblue',
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        borderWidth: 1,
        alignItems: 'center',
        borderStyle: 'solid',
        fontSize: 15,
    },

    grid: {
        marginTop: 13,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center'
    },

    clockImage: {
        width: 23,
        height: 23,
    },
    image: {
        width: 68,
        height: 67,
    },

    instructionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    instruction: {
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    criticalInfo: {
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    },



    statView: {
        marginLeft: 20,
        padding: 0,
        height: 80,
        flexDirection: 'column',
        width: 200
    },
    score: {
        marginRight: 20,
        marginTop: 8,
        color: 'green'
    },
    guide: {
        width: 20,
        height: 20,
        marginLeft: 1,
        marginTop: 9
    },

    pageOneView: {
        marginTop: 6,
        marginLeft: 5 
    },

    matchInfoView: {
        marginLeft: 20,
        flexDirection: 'row', 
    },
    matchInfo: {
        marginRight: 15,
        marginTop: 8,
        color: 'black'
    },
    toggleMusic: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 7,
        marginTop: 3,
    },
    toggleText: {
        fontSize: 16,
        textAlign: 'center',
    },

    startView: {
        marginTop: 15,
        alignItems:"center"
    },
    bailoutView: {
        marginTop: 15,
    },
    linkView: {
        marginLeft: 150,
        marginRight: 150
    },

    inputView: {
        flexDirection: 'row',
        marginTop: 20,
        marginRight: 20, 
    },
    inputLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 8,
    },
    difficultyView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        width: 200
    },
    difficultyLabel: {
        fontSize: 15,
        fontWeight: 'bold' 
    },
    selectedDiff: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15 
    },

    // player
    pTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    pBR: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#ff0000" 
    },
    pName: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "blue"
    },
    pScore: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "green"
    },
    pTime: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "brown"
    },

    leaderView: {
        alignItems: "center",
        marginTop: 5
    },
    leaderPressable: {
        backgroundColor: 'orange',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        height: 30,
        width: 200,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 7,
    },
    leaderText: {
        textAlign: 'center',
        fontSize: 17,
        color: "black"
    },

    center: {
        alignItems:'center'
    },

    playCurrentBtn: {
        marginTop:5,
        backgroundColor: 'lightgreen',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        height: 30,
        width: 150,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 7,
    },

    playNewBtn: {
        marginTop: 5,
        backgroundColor: 'yellow',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        height: 30,
        width: 150,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 7,
    },

    resetGameBtn: {
        marginTop: 10,
        backgroundColor: 'red',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        height: 30,
        width: 150,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 7,
    },

    proceedBtn: {
        marginTop: 25,
        alignItems:'center',
    },
    instructionBtn: {
        marginTop: 25,
        alignItems: 'center',
    },
    gameBtnView: {
        marginTop: 8,
        alignItems:'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightgreen',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        width: 100,
        height:35,
        borderWidth: 2,
        borderRadius: 7,
        padding: 2,
        marginTop:10
    },
    buttonText: {
        textAlign:'center',
    },

    input: {
        width: 257,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center'
    },
});

export default styles;