import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
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
        width: 70,
        height: 70,
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
        padding: 5,
        width: 200,
        height: 50,
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