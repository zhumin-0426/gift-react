import React from "react";
import Editor from 'react-umeditor';
class Compiler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
    this.getIcons = this.getIcons.bind(this)
    this.getPlugins = this.getPlugins.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  getIcons() {
    var icons = [
      "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
      "paragraph fontfamily fontsize | superscript subscript | ",
      "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
      "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
      "horizontal date time  | image emotion spechars | inserttable"
    ]
    return icons;
  }
  getPlugins() {
    console.log("图片上传")
    return {
      "image": {
        "uploader": {
          "name": "file",
          "url": "/api/goods/goodsDetail",
          "filter": function (res) {
            return res.picUrl
          }
        }
      }
    }
  }
  handleChange(content) {
    this.getPlugins()
    this.setState({
      content: content
    }, () => {
      console.log("content", this.state.content)
    })
  }
  render() {
    const icons = this.getIcons();
    const plugins = this.getPlugins();
    return (
      <>
        <div className="editor" style={{width:"50%"}}>
          <Editor ref="editor"
            icons={icons}
            value={this.state.content}
            onChange={this.handleChange}
            plugins={plugins} />
        </div>
      </>
    )
  }
}
export default Compiler