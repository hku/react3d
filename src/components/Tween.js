import React from "react";
import TWEEN from "tween";

class Tween extends React.Component {
	constructor(props) {
		super(props);
		const {data} = props;
		this.state = Object.assign({}, data);
		this.tween = null;
		this.fireTween = this.fireTween.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		const {data} = nextProps;
		const {data: preData} = this.props;
		for (let k in data) {
			if (preData[k] != data[k]) {
				this.fireTween(data)
				break;
			}
		}
	}
	fireTween(data){
		const newData = Object.assign({}, this.state);
		const me = this;
		me.tween = new TWEEN.Tween(newData).to(data, 1000).easing(TWEEN.Easing.Quadratic.Out).onUpdate(function() {
			me.setState(newData);
		}).start();
	}

	render(){

		const {data, view} = this.props;
		return view(this.state);
	}
}

export default Tween;