import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    scoreCount: {
        fontSize: 30,
        color: 'blue',

    },
    grid: {
        marginTop: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        margin: -0,
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

    }
});

export default styles;