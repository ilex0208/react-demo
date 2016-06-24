import React, {Component} from 'react';
import ComDescContent from './ComDescContent';
import ComService from './ComService';
import ComSubmit from './ComSubmit';

/**
 * 组件内容描述
 * 组装所有与‘发布组件’相关的react组件
 * @author ilex
 */
class MainContent extends Component {
    render() {
        return (
            <div className={"ask-main-box"}>
                <div className={"question-description"}>
                    <ComDescContent />
                    <ComService />
                    <div className={"wgt-submit"}>
                        <ComSubmit />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;