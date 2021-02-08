import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity,
    Dimensions,
    navigation,
    FlatList,
    Image,
    Alert,
    TextInput
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default class Setting extends React.Component {


    state = {
        data: [],
    }

    fetchData = async () => {
        const response = await fetch('http://localhost:3004/note'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
        const testTable = await response.json();
        this.setState({ data: testTable });

    }

    componentDidMount = () => {
        this.fetchData();
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View>
                            {item.no == 1 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 2 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 3 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 4 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 5 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 6 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 7 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 8 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 9 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 10 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 11 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 12?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 13 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 14 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 15 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 16 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 17 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 18 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 19 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                            {item.no == 20 ?
                                <View style={styles.buttonNote}>
                                    <Text style={{ color: '#fff', margin: 20 }}>{item.notes}</Text>
                                </View>
                                : null}
                        </View>
                    }
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({

    cards: {
        alignSelf: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#FFF',
        borderRadius: 15,
        elevation: 10,
        position: 'absolute',
        top: 250,
        left: 0,
        right: 0,
        bottom: 0,
    },
    buttonNote: {
        alignSelf: 'center',
        width: 350,
        height: 200,
        marginTop: 30,
        backgroundColor: "#1687a7",
        borderRadius: 15,
        elevation: 10,
    },

});