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
    grid: {
        marginTop: 13,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    clockImage: {
        width: 23,
        height: 23,
    },
    image: {
        width: 68,
        height: 67,
    },

    instruction: {
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',

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
        marginTop:3
        
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