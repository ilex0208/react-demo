import React, {Component} from 'react';

/**
 * 格言
 * @author ilex
 */
class ComMotto extends Component {
    render() {
        return (
            <div className={"ask-slogan"}>
                {this.props.headerDescr}
            </div>
        );
    }
}

export default ComMotto;