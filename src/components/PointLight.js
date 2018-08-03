import Object3D from "./Object3D.js";
import React from "react";
import {PointLight as ThreePointLight} from "three";

class PointLight extends Object3D {
	objContructor(props){
		const {color, intensity, distance, decay, x, y, z} = props;
		const light = new ThreePointLight( color, intensity, distance, decay);
		light.position.set( x, y, z);
		return light;
	}
}

PointLight.propTypes = {
  color: React.PropTypes.number,
  intensity: React.PropTypes.number,
  distance: React.PropTypes.number,
  decay: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  z: React.PropTypes.number,
};

PointLight.defaultProps = {
	color: 0xffffff,
	intensity: 1,
	distance: 0,
	decay: 1,
	x: 0, y:0, z:0
};

Object3D.setTypes(PointLight, {hasChild: false});

export default PointLight;