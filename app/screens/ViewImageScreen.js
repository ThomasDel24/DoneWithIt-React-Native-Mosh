import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image resizeMode='contain' style={styles.image} source={{ uri: 'https://grandrapidschair.com/wp-content/uploads/2016/01/250_Brady_Graphite_Honey-1-682x1024.jpg' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    closeIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    }
})

export default ViewImageScreen;