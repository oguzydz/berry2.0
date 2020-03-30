import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Redux 
import { connect } from 'react-redux';
import * as todoActions from '../store/actions/todoActions';

// Yardımcı Libs
import { Drawer } from '@ant-design/react-native';

class RightDrawer extends React.Component {

    render() {

        const sidebar = (
            <ScrollView style={[styles.container]}>
                <Text>asdasd</Text>
            </ScrollView>
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