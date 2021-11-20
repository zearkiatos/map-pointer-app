import React, { Fragment } from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

const List = ({ points }) => {
    return (
        <Fragment>
            <View style={styles.list}>
                <FlatList
                    data={points.map(point => point.name)}
                    renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button title="Close"></Button>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 250
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15
    },
    button: {
        paddingBottom: 15
    }
});

export default List;