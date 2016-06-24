import React, {Component} from 'react';

/**
 * 顶部导航子组件
 * @author ilex
 */
class NavigateRight extends Component {
    render() {
        return (
            <div className={"menu-right-section"}>
                <ul className={"menu-right-list"}>
                    <li className={"menu-right-list-item zhidao-app"}>
                        <a href="#" className={"menu-right-list-link"}>
                            <span className={"item-icon"}>

                            </span>
                            <span className={"item-name"}>
                                手机版
                            </span>
                        </a>
                        <span className={"right-list-item-devide"}>

                        </span>
                    </li>
                    <li className={"menu-right-list-item user-center"}>
                        <a href="#" className={"menu-right-list-link"}>
                            <span className={"item-icon"}>

                            </span>
                            <span className={"item-name"}>
                                我的组件
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavigateRight;