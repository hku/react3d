import React from "react";
import {Object3D as ThreeObject3D} from "three"
import Animations from "../utils/Animations.js"

class Object3D extends React.Component {
	constructor(props) {
		super(props);
		const {update} = props
		this.obj = this.objContructor(props);


		
		if (update instanceof Function) {
			this.updateObj = { update: () => update(this.obj) }
		}
	}
	componentWillReceiveProps(nextProps) {
		this.objWillReceiveProps(nextProps);
	}
	componentDidMount(){
		const parent = this.context.parent;
		parent.add(this.obj);

		if (this.updateObj) {
			Animations.add(this.updateObj);
		} else {
			Animations.add(this);
		}

		this.objDidMount();
	}
	componentWillUnmount(){
		const parent = this.context.parent;
		parent.remove(this.obj);

		if (this.updateObj) {
			Animations.remove(this.updateObj);
		} else {
			Animations.remove(this);
		}

		this.objWillUnmount();
	}
	componentDidUpdate(prevProps) {
		this.objDidUpdate(prevProps)
	}
	render(){
		return <span>{this.props.children}</span>;
	}
	getChildContext() {
	    return {
	    	parent: this.obj
	    };
	}
	update(){
	}
	objContructor(props) {
		const {x, y, z, rx, ry, rz} = props;
		const obj = new ThreeObject3D();
		obj.position.set(x, y, z);
		obj.rotation.set(rx, ry, rz);
		return obj
	}
	objWillReceiveProps(nextProps){}
	objDidUpdate(prevProps){}
	objDidMount(){
	}
	objWillUnmount(){}
}

Object3D.setTypes = (obj, opt) => {
	opt = opt || {};
	if(opt.hasChild) {
		obj.childContextTypes = {
  			parent: React.PropTypes.object
		};
	}
	obj.contextTypes = {parent: React.PropTypes.object};
}

Object3D.propTypes = {
	x: React.PropTypes.number,
	y: React.PropTypes.number,
	z: React.PropTypes.number,
	rx: React.PropTypes.number,
	ry: React.PropTypes.number,
	rz: React.PropTypes.number,
}

Object3D.defaultProps = {x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0}

Object3D.setTypes(Object3D, {hasChild: true});


export default Object3D;