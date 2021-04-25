import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Redux 
import { connect } from 'react-redux';
import * as todoActions from '../store/actions/todoActions';

// Yardımcı Libs
import { Drawer } from '@ant-design/react-native';
import { Colors } from './Colors';

class RightDrawer extends React.Component {

    render() {

        const sidebar = (
            <View style={[styles.container]}>

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 20,
                }}>
                    <Text style={{ fontSize: 23, fontWeight: "bold", color: Colors.purple }}>
                        INFORMATION
                    </Text>

                </View>


                <View style={{
                    flex: 5,
                }}>
                    <View style={{ flexDirection: "row", marginLeft: 20 }}>
                        <View>
                            <Text style={{ fontSize: 50 }}>10</Text>
                        </View>
                        <View style={{ flexDirection: "column", padding: 10 }}>
                            <View>
                                <Text style={{ fontSize: 18 }}>MAYIS 2020 22:39</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14 }}>MODIFICATION DATE</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: Colors.gray, margin: 10 }}></View>

                    <View style={{ flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20 }}>32</Text>
                            <Text style={{ fontSize: 15 }}>WORDS</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20 }}>217</Text>
                            <Text style={{ fontSize: 15 }}>CHARACTERS</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20 }}>9s</Text>
                            <Text style={{ fontSize: 15 }}>READ TIME</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20 }}>6</Text>
                            <Text style={{ fontSize: 15 }}>PARAGRAPHS</Text>
                        </View>
                    </View>

                    <View style={{ height: 1, backgroundColor: Colors.gray, margin: 10 }}></View>


                    <View style={{
                        flex: 1,
                    }}>
                        <View>
                            <Text>ALARM</Text>
                        </View>

                    </View>


                    <View style={{
                        marginLeft: 20,
                        flexDirection: "column",
                        marginTop: 10,
                    }}>
                        <View style={{
                            marginBottom: 3
                        }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>OĞUZ IPHONE'U</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 17 }}>LAST EDITING DEVICE</Text>
                        </View>
                    </View>





                    <View style={{
                        marginLeft: 20,
                        flexDirection: "column",
                        marginTop: 20,
                    }}>
                        <View style={{
                            marginBottom: 3
                        }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>31 KASIM 2019 22:37</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 17 }}>CREATION DATE</Text>
                        </View>
                    </View>



                </View>

                <View style={{ height: 1, backgroundColor: Colors.gray, margin: 10, marginBottom: 50 }}></View>




            </View>
        );

        return (
            <Drawer
                sidebar={sidebar}
                position="right"
                open={this.props.visible}
                // drawerRef={el => (this.drawer = el)}
                onOpenChange={(response) => response === false ? this.props.closePopup() : null}
                drawerBackgroundColor="#fff"
            >
            </Drawer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = () => {
    return {

    }
}


export default connect(null, null)(RightDrawer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});