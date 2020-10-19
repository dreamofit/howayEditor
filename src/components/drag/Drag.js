import React, { Component } from 'react';

class Drag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pointX: 0,
            pointY: 0, //鼠标位置
        }
    }

    DragStart = (e) => {
        let { pageX, pageY } = this.props;
        let pointX = e.clientX - pageX;
        let pointY = pageY - e.clientY;
        this.setState({ pointX, pointY })
        e.dataTransfer.dropEffect = 'move';
        e.dataTransfer.effectAllowed = "move";
        //e.persist();
    }

    handleDrag = (e) => {
        let { pointX, pointY } = this.state;
        e.persist();
        e.dataTransfer.dropEffect = 'move';
        e.dataTransfer.effectAllowed = "move";
        //console.log(e);
        if (e.clientX === 0 && e.clientY === 0) {
            return;
        }
        if (this.state.canMove) {
            this.props.pagePositionChange(e.pageX - pointX, e.pageY + pointY);
        } else {
            this.setState({ canMove: true });
        }
    }
    DragOver = (e) => {
        e.dataTransfer.dropEffect = 'move';
        e.dataTransfer.effectAllowed = "move";
        //e.persist();
        e.preventDefault();
    }
    DragEnd = (e) => {
        e.persist();
        this.setState({ canMove: false });
    }

    render() {
        const { draggable, styles } = this.props;
        return (
            <div id="drag" draggable={draggable}
                onDrag={e => this.handleDrag(e)}
                onDragStart={e => { this.DragStart(e) }}
                onDragOver={e => { this.DragOver(e) }}
                onDragEnd={e => { this.DragEnd(e) }}
                style={styles}>
                <button onClick={e=>this.props.close(e)} style={{ float: "right" }}>X</button>
            </div>
        );
    }
}
Drag.defaultProps = {
    draggable: true,
    styles: { cursor: "move" }
}

export default Drag;