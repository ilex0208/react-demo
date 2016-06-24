import React, {Component} from 'react';
import NavigateRight from './NavigateRight';

/**
 * 顶部导航
 * @author ilex
 */
class Navigate extends Component {
    constructor(props){
        super(props);
        this.state = {
            styleOverflow:{
                overflow: 'hidden'
            },
            boxItems:[
                {id:"item-cat-1",className:"menu-item menu-item-cat",textInfo:"组件"},
                {id:"item-lanmu-2",className:"menu-item menu-item-lanmu",textInfo:"专栏"},
                {id:"item-user-3",className:"menu-item menu-item-user",textInfo:"用户"},
                {id:"item-expert-4",className:"menu-item menu-item-expert",textInfo:"特色"}
            ]
        };
    }
    render() {
        let items = [];
        this.state.boxItems.forEach(function(obj,index){
            items.push(
                <div className={obj.className} key={obj.id}>
                    <a className={"menu-title "} href="#">{obj.textInfo}</a>
                </div>
            );
        });
        return (
            <div className={"nav-menu-container"}>
                <div className="nav-show-control" style={this.state.styleOverflow}>
                    <div className={"nav-menu-layout"}>
                        <div className={"nav-menu line"}>
                            <div className={"nav-menu-content container"}>
                                <div className={"content-box"}>
                                    <div className={"menu-item menu-item-index"}>
                                        <a className={"menu-title "} href="#">首页</a>
                                    </div>
                                    <div className={"menu-item-box"}>
                                        {items}
                                    </div>
                                    <NavigateRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigate;