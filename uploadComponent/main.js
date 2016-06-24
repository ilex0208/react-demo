import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigate from './component/Navigate';
import ComMotto from './component/ComMotto';
import MainContent from './component/MainContent';
import "./res/common.css";
import "./res/main.css";

/**
 * 主界面,入口
 * 将所需要的组件进行组装
 * @author ilex
 */
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //如果你交给某人一个程序，你将折磨他一整天；如果你教某人如何编写程序，你将折磨他一辈子。——David Leinweber
            //软件设计有两种方式：一种方式是，使软件过于简单，明显没有缺陷；另一种方式是，使软件过于复杂，没有明显的缺陷。——C.A.R. Hoare
            //控制复杂性是计算机编程的本质。—— Brian Kernighan
            //靠代码行数来衡量开发进度，就像是凭重量来衡量飞机制造的进度。——比尔•盖茨
            //过早的优化是罪恶之源。——Donald Knuth
            //一个人在教会电脑之前，别说他真正理解这个东西了。——Donald Knuth
            headerDescr: "生命太短暂，不要去做一些根本没有人想要的东西。——Ash Maurya"
        };
    }

    render() {
        return (
            <div>
                <Navigate />
                <div className={"container"}>
                    <div className={"ask-wrapper"}>
                        <ComMotto headerDescr={this.state.headerDescr}/>
                        <MainContent />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("app"));