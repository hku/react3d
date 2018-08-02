import React from "react";
import  THREE from "three"
import ThreeOrbitControls from "three-orbitcontrols"

class OrbitControls extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		const canvas = this.context.canvas;
		const camera = this.context.parent;
		const controls = new ThreeOrbitControls(camera, canvas);
	}
	render(){
		return null;
	}
}

OrbitControls.contextTypes = {
	parent: React.PropTypes.object,
	canvas: React.PropTypes.object
};

export default OrbitControls;