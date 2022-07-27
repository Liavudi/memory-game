import { StyleSheet, Platform, StatusBar } from 'react-native';


export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "rgb(40,40,40)",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});