import React from 'react'

class SearchBar extends React.Component{

    state = {term: ''}

    onFormSubmit = e => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render() {

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label htmlFor="searchInput"> Image Search </label>
                    <div className="field">
                        <input value={this.state.term} onChange={e=>{this.setState({term: e.target.value})}} type="text" id="searchInput"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
