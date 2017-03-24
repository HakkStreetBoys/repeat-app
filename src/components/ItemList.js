import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import Item from './Item';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://pebbleplates.com/repeat-menu/wp-json/wp/v2/menu?menu_cat=8');
    }

    renderItems() {
      return this.props.items.map((item) => (
        <Item key={item.id} item={item} />
      ));
    }

    render() {
        if (this.props.hasErrored) {
            return <Text>Sorry! There was an error loading the items</Text>;
        }

        if (this.props.isLoading) {
            return <Text>Loading…</Text>;
        }

        return (
            <ScrollView>
              {this.renderItems()}
            </ScrollView>
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
