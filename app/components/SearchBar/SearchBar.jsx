import React from 'react';
import PropTypes from 'prop-types';

const barStyles = {
    height: '30px',
    margin: '10px auto',
    width: '100%'
};
const wrapperStyles = {
    width: '45%'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBoxValue: ''
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleKeyPress(event) {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            this.props.searchProducts(this.state.searchBoxValue);
        }
    }

    handleOnChange(event) {
        this.setState({ searchBoxValue: event.target.value });
    }

    render() {
        return (
            <div style={wrapperStyles}>
                <input
                    type="text"
                    style={barStyles}
                    onKeyDown={this.handleKeyPress}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    searchProducts: PropTypes.func
};

export default SearchBar;
