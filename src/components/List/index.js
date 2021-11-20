import React, { Fragment } from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

const List = ({ points }) => {
    return (
        <Fragment>
            <View style={styles.list}>
                <FlatList
                    data={points.map(point => point.name)}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={item => item}
                />
            </View>
            <View>
                <Button title="Close"></Button>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 250
    }
});

export default List;