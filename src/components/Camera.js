import TWEEN from "tween"
import {PerspectiveCamera, WebGLRenderer} from "three";
import Object3D from "./Object3D.js";
import React from "react";
import Animations from "../utils/Animations.js"

class Camera extends Object3D {
	objContructor(props){
		const {fov, aspect, near, far, x, y, z} = props;
		const camera = new PerspectiveCamera(fov, aspect, near, far);
		
		camera.position.x = x;
		camera.position.y = y;
		camera.position.z = z;

		this.frameId = null;
		this.renderFrames = this.renderFrames.bind(this);
		return camera;
	}
	objDidMount(){
		const canvas = this.context.canvas;
		this.scene = this.context.parent;
		this.webGLRenderer = new WebGLRenderer({antialias: true, canvas});
		this.renderFrames();
	}
	objWillUnmount(){
		cancelAnimationFrame(this.frameId);
	}
	renderFrames(){
		const camera = this.obj;
		const scene = this.scene;
		const webGLRenderer = this.webGLRenderer;
		TWEEN.update();
		Animations.update();
		
		webGLRenderer.render(scene, camera);
		this.frameId = requestAnimationFrame(this.renderFrames)
	}
}

Camera.propTypes = {
  fov: React.PropTypes.number.isRequired,
  aspect: React.PropTypes.number.isRequired,
  near: React.PropTypes.number.isRequired,
  far: React.PropTypes.number.isRequired,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  z: React.PropTypes.number
};

Camera.defaultProps = {x: 0, y:0, z:0 };

Camera.childContextTypes = {
  	parent: React.PropTypes.object
};

Camera.contextTypes = {
	parent: React.PropTypes.object,
	canvas: React.PropTypes.object
};

export default Camera;