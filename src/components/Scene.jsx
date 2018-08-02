import React from "react";
import {Scene as ThreeScene} from "three"

class Scene extends React.Component {
	constructor(props){
		super(props);
		const {width, height, style} = props;
		this.obj = new ThreeScene();
		this.canvas = document.createElement("canvas");
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style = style;
	}
	componentDidMount(){
		const box = this.refs.container3d;
		box.appendChild(this.canvas);
	}
	componentWillUnmount(){
		const box = this.refs.container3d;
		box.removeChild(this.canvas);
	}
	render(){
		const {width, height, style} = this.props;
		return <div ref="container3d">{this.props.children}</div>
	}
	getChildContext() {
	    return {
	    	parent: this.obj,
	    	canvas: this.canvas
	    };
	}
}
Scene.childContextTypes = {
  	parent: React.PropTypes.object,
  	canvas: React.PropTypes.object
};
export default Scene