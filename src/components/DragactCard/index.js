import React, { PureComponent } from 'react';
import "./index.less";
class DragactCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        let { item, provided } = this.props;
        return (
            <div
                {...provided.props}
                style={{
                    ...provided.props.style,
                    background: '#fff' ,
                }}
            >
            <div className="DragactCard-title">
                <div {...provided.dragHandle}>{this.props.title}</div>
                {/* <div> - +  x</div> */}
            </div>
            {this.props.children}
                <span
                    {...provided.resizeHandle}
                    style={{
                        position: 'absolute',
                        width: 10, height: 10, right: 2, bottom: 2, cursor: 'se-resize',
                        borderRight: '2px solid rgba(15,15,15,0.2)',
                        borderBottom: '2px solid rgba(15,15,15,0.2)'
                    }}
                />
            </div>
        )
    }
}
export default DragactCard