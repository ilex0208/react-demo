import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/**
 * 组件描述
 * @author ilex
 */
class ComDescContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpandCom: false,
            displayNone: {
                display: "none"
            },
            displayBlock:{
                display: "block"
            },
            imageAreadiv: {
                position: 'absolute', top: '0px', left: '0px', width: '46px', height: '26px', overflow: 'hidden', bottom: 'auto', right: 'auto'
            },
            imageAreaLabel: {
                opacity: 0, width: '100%', height: '100%', display: 'block', cursor: 'pointer', background: 'rgb(255, 255, 255)'
            },
            btnClass: "supply-qd-btn",
            btnText: "补充描述",
            uploadImage:"上传图片",
            comContent: "",
            comExpandContent: "",
            charCount: 0,
            imageList:[],
            isShowImageList:false
            
        };
    }
    render() {
        return (
            <div className={"qd-layout"}>
                <label className={"sub-title title-label"}><i>*</i>组件说明：</label>
                <div className={"qd-content"}>
                    <div className={"qd-ct qd-title"}>
                        <textarea placeholder="请在这里概述您的组件" value={this.state.comContent} onChange={this.validLength.bind(this) }></textarea>
                        <span className={"count"}><b>{this.state.charCount}</b>/49</span>
                    </div>
                    <div className={"qd-ct qd-desc"} style={this.state.isExpandCom?this.state.displayBlock:this.state.displayNone}>
                        <textarea placeholder="您可在这里继续补充组件细节" defaultValue={this.state.comExpandContent}></textarea>
                    </div>
                </div>
                <div data-hide="doctor" style={this.state.displayNone}>
                    <div className={"widget-tag"} style={this.state.displayNone}>
                        <div className={"tag-container clearfix"}>
                            <span className={"tag-lb"}>组件标签：</span>
                            <div className={"add-tag-handler"}>
                                <span className={"tag-search"}>+添加标签</span>
                                <span className={"grey"}>正确的组件标签，会获得更准确的组件</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"qd-plus"}>
                    <div onClick={this.expandOrFoldQuestion.bind(this) } className={this.state.btnClass}><i className={"ico"}></i><span className={"txt"}>{this.state.btnText}</span></div>
                    <ul className={"qd-plus-stuff clearfix"}>
                        <li className={"add-img webuploader-container"}>
                            <div onClick={this.addImage.bind(this)} className={"webuploader-pick"}>
                                <div className={"clearfix add-img-ct"}>
                                    <i className={"ico"}></i>
                                    <span className={"txt"}>{this.state.uploadImage}</span>
                                </div>
                            </div>
                            <div style={this.state.imageAreadiv}>
                                <input onChange={this.fileChange.bind(this)} type="file" capture="camera" name="file" ref="refFileInput" className={"webuploader-element-invisible"} accept="image/*" />
                                <label style={this.state.imageAreaLabel}></label>
                            </div>
                        </li>
                    </ul>
                    <ul ref="imageList" className={"qd-img-list clearfix"} style={this.state.isShowImageList?this.state.displayBlock:this.state.displayNone}>
                        {this.state.imageList}
                    </ul>
                </div>
            </div>
        );
    }

    /**
     * 图片处理
     */
    fileChange(event) {
        event.preventDefault();
        let result = this.state.imageList;
        if (result.length < 8) //最多上传8张图片
        {
            let tempFiles = event.target.files;
            let count = tempFiles.length;
            for (let i = 0; i < count; i++) {
                tempFiles[i].thumb = URL.createObjectURL(tempFiles[i]);
            }
            // convert to array
            tempFiles = Array.prototype.slice.call(tempFiles, 0);
            tempFiles.filter(function (file) {
                if (/image/i.test(file.type)) {
                    let liStyle = { backgroundImage: 'url(' + file.thumb + ')' };
                    result.push(
                        <li key={file.thumb} style={liStyle}>
                            <span className={"bg"}></span>
                            <span className={"del-btn"}>删 除</span>
                        </li>
                    );
                }
            });
            //console.log(result);
            this.setState({
                imageList: result,
                isShowImageList: true
            })
        }else{
            alert("您最多只能上传8张图片！");
        }
    }

    /**
     * 上传图片事件
     */
    addImage(e) {
        //在qd-img-list中显示图片
        // <li id="WU_FILE_1" style="">
        //     <span class="bg"></span>
        //     <span class="del-btn">删 除</span>
        // </li>
        e.preventDefault();
        ReactDOM.findDOMNode(this.refs.refFileInput).click();
    }

    /**
     * 补充或收起问题
     */
    expandOrFoldQuestion() {
        if (this.state.isExpandCom)//已经点击问题补充
        {
            this.setState({
                isExpandCom: false,
                btnClass: "supply-qd-btn",
                btnText: "补充描述"
            });
        }
        else {
            this.setState({
                isExpandCom: true,
                btnClass: "supply-qd-btn  on-sup-show",
                btnText: "收起补充"
            });
        }
    }

    /**
     * 实时验证输入额问题字数
     */
    validLength(e) {
        let val = e.target.value;
        let lengths = this.getByteLen(val);
        if (lengths > 49) {
            val = val.substring(0, 49);//只保留49个字符
            this.setState({
                comContent: val,
                charCount: 49
            });
        }
        else {
            this.setState({
                comContent: val,
                charCount: lengths
            });
        }
    }

    /**
     * 获取输入字符个数
     * 汉字 1
     * 字母/数字/字符等 2
     */
    getByteLen(val) {
        let len = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i].match(/[^x00-xff]/ig) != null) //全角 
            {
                len += 2;
            }
            else {
                len += 1;
            }
        };
        if (len % 2 !== 0) {
            len -= 1;
        }
        return len / 2;
    }
}

export default ComDescContent;