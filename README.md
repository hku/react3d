# react3d

a light javascript library to glue threejs and reactjs

- [examples](https://github.com/hku/react3d-examples.git) 
- [blog](https://hku.github.io/articles/react3d/)

## Installation

Using npm

```
npm i @kunhuang09/react3d
```

In javascript

```
import {Scene, Camera, PointLight, Object3D, OrbitControls, Tween} from "@kunhuang09/react3d"
```

## Demo

Here is a simple demo：

！[demo](https://hku.github.io//articles/react3d/img/capture.gif)

The corresponding jsx code:

```xml

 <Scene width={width} height={height} style={{display:"block", margin: 0, cursor:"pointer"}}>
	<button onClick= {this.onClickBtn}>tween animation</button>
	<Camera fov={80} aspect={width/height} near={0.1} far={50} z={30}>
		<OrbitControls/>
	</Camera>
	<PointLight y={200}/>
	<PointLight x={100} y={200} z={100}/>
	<PointLight x={-100} y={-200} z={-100}/>
	<Object3D update={obj => {
		obj.rotation.x += 0.005;
		obj.rotation.y += 0.005;
	}}>
		<Cube/>
		<Cube wireframe={true}/>
	</Object3D>
	<Tween data={this.state} view = {v => <Dodecahedron x={v.x} y={v.y}/>}/>
</Scene>

```