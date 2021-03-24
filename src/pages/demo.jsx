import React from 'react';
import {Input} from 'antd';
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            specList: [
                {
                    name: "颜色",
                    value: ["黑色","白色"]
                },
                {
                    name: "尺寸",
                    value: ["10", "20"]
                }
            ],
            specAttrList: [
                {
                    attr_list: { 颜色: "黑色" },
                    bar_code: "",
                    price: 0
                },
                {
                    attr_list: { 颜色: "黄色" },
                    bar_code: "",
                    price: 5,
                },
                {
                    attr_list: { 颜色: "白色" },
                    bar_code: "",
                    price: 6
                },
                {
                    attr_list: { 颜色: "黑色", 尺寸: "10" },
                    bar_code: "",
                    id: 0,
                    price: 0
                },
                {
                    attr_list: { 颜色: "黑色", 尺寸: "20" },
                    bar_code: "",
                    id: 1,
                    price: 0
                },
                {
                    attr_list: { 颜色: "白色", 尺寸: "10" },
                    bar_code: "",
                    id: 2,
                    price: 0
                },
                {
                    attr_list: { 颜色: "白色", 尺寸: "20" },
                    bar_code: "",
                    id: 3,
                    price: 0
                }
            ]
        }
        this.countSum = this.countSum.bind(this);
        this.getSpecAttr = this.getSpecAttr.bind(this);
        this.showTd = this.showTd.bind(this);
    }
    // 计算属性的乘积
    countSum(specIndex) {
        let num = 1;
        this.state.specList.forEach((item, index) => {
            if (index >= specIndex && item.value.length) {
                num *= item.value.length;
            }
        });
        return num;
    }
    /**
     * 根据传入的属性值，拿到相应规格的属性
     * @param specIndex
     * @param index 所有属性在遍历时的序号
     * @returns {string}
     */
    getSpecAttr(specIndex, index) {
        // 获取当前规格项目下的属性值
        let specList = this.state.specList;
        const currentValues = specList[specIndex].value;
        // 判断是否是最后一个规格项目
        let indexCopy = (specList[specIndex + 1] && specList[specIndex + 1].value.length)
            ? index / this.countSum(specIndex + 1)
            : index;
        const i = Math.floor(indexCopy % currentValues.length);
        return (i.toString() !== 'NaN') ? currentValues[i] : '';
    }
    /**
      * 根据传入的条件，来判断是否显示该td
      * [如果当前项目下没有属性，则不显示]
      * @param specIndex
      * @param index
      * @returns {boolean}
      */
    showTd(specIndex, index) {
        if (!this.state.specList[specIndex]) {
            return false;
        } else if (index % this.countSum(specIndex + 1) === 0) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        // const init = this.field.init;
        const { specList, specAttrList } = this.state;
        const renderSpec = [];
        // 表格合并
        for (let i = 0; i < this.countSum(0); i++) {
            renderSpec.push(<tr key={i}>
                {specList.length > 0 && specList.map((item, index) => {
                    if (this.showTd(index, i)) {
                        let tagName = this.getSpecAttr(index, i);
                        let n = index + 1;
                        return (
                            <td rowSpan={this.countSum(n)} key={index}>{tagName}</td>
                        )
                    }
                })}
                <td>
                    <Input value={specAttrList[i].bar_code} placeholder="请输入商品条形码" />
                </td>
                <td>
                    <Input value={specAttrList[i].price} placeholder="请输入销售价" />
                </td>
            </tr>);
        }
        return (
            <div className="custom-content">
                <div className="next-table">
                    <table border="1">
                        <thead>
                            <tr>
                                {this.state.specList.length > 0 && specList.map((item, index) => {
                                    return (
                                        <th key={index}>{item.name}</th>
                                    );
                                })}
                                <th>规格编码</th>
                                <th>销售价（元）</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderSpec}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Demo;