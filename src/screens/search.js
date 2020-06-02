import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { SearchBar } from '../components';
import { ColorCommon, GapCommon } from '../assets/publicConsts';

class Search extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <SearchBar onChangeSearchInput={navigation.getParam('changeInput')} />
    })

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({
            changeInput: this.handleChangeInput
        });
    }

    handleChangeInput = (value) => {
        console.log(value)
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    render() {
        return (
            <View style={styles.Search}>
                <Text>搜索</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Search: {
    },
});

export default Search;
