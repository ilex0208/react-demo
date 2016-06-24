import React, {Component} from 'react';

/**
 * 提交表单
 * @author ilex
 */
class ComSubmit extends Component {
    render() {
        return (
            <div className={"clearfix"} data-hide="doctor">
                <div className={"submit-question"}>
                    <button type="button" className={"submit-btn"}>发布组件</button>
                    <div className={"ano-opt"}>
                        <span className={"cb-ico cb-status"} data-id="anonymity"></span>匿名发布<span className={"grey ho"}>消耗</span>
                        <span className={"w ho"}><i className={"i-w"}></i>10</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComSubmit;