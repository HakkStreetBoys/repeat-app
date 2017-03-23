import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://pebbleplates.com/repeat-menu/wp-json/wp/v2/menu?menu_cat=8');
    }

    render() {
        if (this.props.hasErrored) {
            return <Text>Sorry! There was an error loading the items</Text>;
        }

        if (this.props.isLoading) {
            return <Text>Loading…</Text>;
        }

        return (
            <View>
                {this.props.items.map((item) => (
                    <Text key={item.id}>
                        {item.acf.menu_title}
                    </Text>
                ))}
            </View>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
