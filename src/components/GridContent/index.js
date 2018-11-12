import React, { Component } from 'react';
import { getFromLS, saveToLS } from "../../utils/utils"
import map from "lodash/map"
import GridCard from "../GridCard/index.js"
import "../grid-layout/styles.less";
import { WidthProvider, Responsive } from "../grid-layout/react-grid-layout.min";
import { Button,Tag ,Icon } from "quant-ui"
import "./index.less";
const { CheckableTag } = Tag;
const ResponsiveReactGridLayout = WidthProvider(Responsive);
class Member extends Component {
    static defaultProps = {
        onLayoutChange: () => { },
        lableArray:[],
        lableSelect:3,
        ontagClose:()=>{}
    }
    constructor(props) {
        super(props)
        this.state = {
            currentBreakpoint: "lg",
            toolbox: JSON.parse(JSON.stringify(this.getToolboxs())),
            layouts: JSON.parse(JSON.stringify(this.getLayouts(this.props.defaultLayouts)))
        }
    }
    //还原布局
    rollback = () => {
        let layouts = this.props.defaultLayouts;
        if (!layouts.md) {
            layouts.md = layouts.lg;
        }
        if (!layouts.sm) {
            layouts.sm = layouts.md;
        }
        if (!layouts.xs) {
            layouts.xs = layouts.sm;
        }
        this.setState({
            toolbox: [],
            layouts: layouts
        })
        saveToLS(this.props.name, layouts);
        saveToLS(this.props.name + "-toolbox", []);
    }
    getLayouts = (defaultLayouts) => {
        let locasdata = getFromLS(this.props.name)
        let layouts = locasdata || defaultLayouts;
        if (!layouts.md) {
            layouts.md = layouts.lg;
        }
        if (!layouts.sm) {
            layouts.sm = layouts.md;
        }
        if (!layouts.xs) {
            layouts.xs = layouts.sm;
        }
        if (!locasdata) {
            saveToLS(this.props.name, layouts);
        }
        return layouts
    }
    getToolboxs = () => {
        return getFromLS(this.props.name + "-toolbox") || [];
    }
    onLayoutChange = (layout, layouts) => {
        saveToLS(this.props.name, layouts);
        this.setState({ layouts });
        this.props.onLayoutChange(layout, layouts)
    }
    //删除
    onPutItem = item => {
        this.setState(prevState => {
            let toolbox = [
                ...prevState.toolbox,
                item
            ]
            saveToLS(this.props.name + "-toolbox", toolbox);
            return {
                toolbox: toolbox,
                layouts: {
                    ...prevState.layouts,
                    ["lg"]: prevState.layouts[
                        "lg"
                    ].filter(({ i }) => i !== item.i),
                    ["md"]: prevState.layouts[
                        "md"
                    ].filter(({ i }) => i !== item.i),
                    ["sm"]: prevState.layouts[
                        "sm"
                    ].filter(({ i }) => i !== item.i),
                    ["xs"]: prevState.layouts[
                        "xs"
                    ].filter(({ i }) => i !== item.i)
                }
            };
        });
    }
    //添加
    onTakeItem = item => {
        this.setState(prevState => {
            let toolbox = prevState.toolbox.filter((ele) => ele.i !== item.i);
            saveToLS(this.props.name + "-toolbox", toolbox);
            return {
                toolbox: toolbox,
                layouts: {
                    ...prevState.layouts,
                    ["lg"]: [
                        ...prevState.layouts["lg"],
                        item
                    ],
                    ["md"]: [
                        ...prevState.layouts["md"],
                        item
                    ],
                    ["sm"]: [
                        ...prevState.layouts["sm"],
                        item
                    ],
                    ["xs"]: [
                        ...prevState.layouts["xs"],
                        item
                    ]
                }
            }
        });
    };
    renderItem = () => {
        return map(this.state.layouts[this.state.currentBreakpoint], l => {
            return (
                <div key={l.i} >
                    <GridCard key={l.i} title={this.props.titles[l.i]} onClose={() => this.onPutItem(l)}>
                        {this.props.renderItem(l)}
                    </GridCard>
                </div>
            );
        });
    }
    onBreakpointChange = (breakpoint) => {
        this.setState(prevState => ({
            currentBreakpoint: breakpoint,
        }));
    }
    ontagClose = (e,id) => {
        let newArray = this.props.lableArray.filter((ele)=>ele.id != id);
        this.props.ontagClose(newArray,newArray.length > 0?newArray[newArray.length - 1].id:null)
        e.preventDefault();
        e.stopPropagation();
    }
    tagChange = (id) => {
        this.props.ontagClose(this.props.lableArray,id)
    }
    render() {
        let item = this.state.toolbox || []
        return (
            <div>
                <div className="react-grid-buttons">
                    <div style={{float:"left",marginLeft: "10px",lineHeight:"32px"}}>
                        {
                            this.props.lableArray.map((ele,index)=>{
                                return <CheckableTag key={index} className="react-grid-tag" onChange={()=>this.tagChange(ele.id)} checked={ele.id == this.props.lableSelect} >{ele.name}<Icon onClick={(e)=>this.ontagClose(e,ele.id)} style={{marginLeft:"6px",marginRight:"-10px",color:ele.id == this.props.lableSelect?"#ffffff":""}} type="close" /></CheckableTag>
                            })
                        }
                    </div>
                    <Button onClick={this.rollback} icon="rollback" style={{ marginRight: "10px", float: "right" }}>还原布局</Button>
                    <div style={{ float: "right" }}>
                        {item.map((ele, index, arr) => {
                            return <Button type="dashed" key={ele.i} onClick={() => this.onTakeItem(ele)}>{this.props.titles[ele.i]}</Button>
                        })}
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
                <ResponsiveReactGridLayout
                    className="layout"
                    cols={this.props.cols || { lg: 16, md: 12, sm: 8, xs: 4, xxs: 2 }}
                    rowHeight={this.props.rowHeight || 32}
                    onBreakpointChange={this.onBreakpointChange}
                    layouts={this.state.layouts}
                    draggableHandle=".react-grid-dragHandle"
                    onLayoutChange={(layout, layouts) =>
                        this.onLayoutChange(layout, layouts)
                    }
                >
                    {this.renderItem()}
                </ResponsiveReactGridLayout>
            </div>

        );
    }
}
export default Member