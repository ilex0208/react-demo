import React, {Component} from 'react';
import FileUpload from './basic/FileUpload';

/**
 * 上传图片demo
 * @author ilex
 */
class UpFile extends Component {
    constructor(props){
        super(props);
        this.state = {
            files: []
        };
    }

    render() {
        let fileTemp = null;
        let fileTemps = this.state.files;
        return (
            <div>
                <FileUpload onChange={this.fileOnChange.bind(this)} multiple={false} />
                <div className="thumb-box">
                    {fileTemps.length?{fileTemps}:null}
                </div>
            </div>
        );
    }

    fileOnChange(files) {
        this.setState({
            files: this.state.files.concat(files)
        })
    }
}

export default UpFile;