import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: 60,
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        shadowColor: 'white',
        shadowOpacity: 0.8,
        shadowRadius: 16,
        elevation: 30,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }

});