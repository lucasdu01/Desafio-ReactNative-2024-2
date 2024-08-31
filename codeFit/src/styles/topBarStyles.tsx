import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: '#3B1B4D',
        width: '100%',
        position: 'absolute', 
        top:53,
        left:0,
        right:0,
        borderTopColor: '#FFCE07',
        borderBottomColor: '#FFCE07',
        borderWidth:1,
        zIndex: 99,
    },
    iconButton: {
        width: 40,
        height: 40,
    },
});