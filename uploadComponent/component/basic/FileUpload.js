import React, {Component, PropTypes} from 'react';

/**
 * 图片上传
 * @author ilex
 */
class FileUpload extends Component {
    constructor(props) {
        super(props);
		this.state = {
			multiple: true,
			btnValue: '上传图片'
		};
    }

    render() {
		return (
			<a href="javascript:;" className={"upload-button"}>
				<input type="file" multiple={this.state.multiple} ref="fileInput" onChange={this.fileChange.bind(this)} />
				<span>{this.state.btnValue}</span>
			</a>
		);
    }

    fileChange(event) {
		event.preventDefault();
		let files = event.target.files;
		let count = this.state.multiple ? files.length : 1;
		for (let i = 0; i < count; i++) {
			files[i].thumb = URL.createObjectURL(files[i])
		}
		// convert to array
		files = Array.prototype.slice.call(files, 0)
		files = files.filter(function (file) {
			return /image/i.test(file.type)
		})
		this.props.onChange(files, event)
	}
}

FileUpload.propTypes = {
    onChange: React.PropTypes.func.isRequired,
	multiple: React.PropTypes.bool,
	btnValue: React.PropTypes.string
};

export default FileUpload;