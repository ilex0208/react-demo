import React, {Component} from 'react';

/**
 * 发布组件提供的服务
 * @author ilex
 */
class ComService extends Component {
    render() {
        return (
            <div className={"qd-layout qs-area"}>
                <label className={"sub-title"}>组件服务：</label>
                <ul>
                    <li className={"offer-reward clearfix"} data-hide="doctor">
                        <div className={"fl rw-lb"}><span className={"cb-ico cb-status"} data-id="reward"></span>组件报价</div>
                        <div className="fl award-list">
                            <div className={"simulate-select"}><i></i><span className={"reward-num"}>10</span><span className={"down"}></span></div>
                            <ul className={"reward-select-list"}>
                                <li><i></i>10</li>
                                <li><i></i>20</li>
                                <li><i></i>50</li>
                                <li><i></i>100</li>
                                <li><i></i>200</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ComService;