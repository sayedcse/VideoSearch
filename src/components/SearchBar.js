import React from "react";

class SearchBar extends React.Component {
    state = {
        term: "",
    };
    onFromSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFromSubmit} className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
