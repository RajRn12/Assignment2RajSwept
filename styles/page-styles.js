import { Text, StyleSheet } from 'react-native';

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
        borderWidth: 2,
        borderRadius: 7,
        padding: 2,
        width: 100,
        height: 40,
    },
    buttonText: {
        textAlign:'center',
        fontSize: 20,
    },

    input: {
        width: 211,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center'
    },
});

export default styles;