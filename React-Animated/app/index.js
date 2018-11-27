import './index.less'
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Animated from 'animated/lib/targets/react-dom';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showH1: false,
			anim: new Animated.Value(0),
			anim1: new Animated.Value(0),
		}
	}
	componentDidMount(){
		this.setState({
			showH1: true,
		})
	}
	anim1Click = () =>{
		var rec = ()=> {
			Animated.sequence([
				Animated.timing(this.state.anim1, {toValue: 1.5, duration: 150}),
				Animated.timing(this.state.anim1, {toValue: -1.5, duration: 150}),
			]).start(rec);
		}
		rec();
	}
	render(){
		return(
			<React.Fragment>
				<CSSTransition
					in = {this.state.showH1}
					timeout = {500}
					unmountOnExit
					classNames = "app"
				>
					<h1>Hello World</h1>
				</CSSTransition>
				<div
				    style={{overflow: 'scroll', height: 102}}
			        onScroll={Animated.event([
			          {target: {scrollLeft: this.state.anim}}
			        ])}
				>
			        <div style={{width: '10000px', height: 1}} />
			        {[0, 1, 2, 3, 4].map(i =>
			          	// eslint-disable-next-line react/jsx-key
			          	<Animated.div
				            style={{
				              left: this.state.anim.interpolate({
				                inputRange: [0, 1],
				                outputRange: [0, i]
				              }),
				              pointerEvents: 'none',
				              border: '1px solid #ccc',
				              width: '100px',
				              height: '100px',
				              position: 'absolute',
				            }}
				            className="circle"
			          	>
				            {i === 4 && 'H-Scroll'}
			          	</Animated.div>
			        )}
				</div>
				<Animated.div
					style={{
						width: 100,
						height:100,
						position: 'absolute',
						left: this.state.anim1.interpolate({
				                inputRange: [-1.5, -0.5, 0.5, 1.5],
				                outputRange: [0, 5, 0, 5]
				              }),
						transform: [
							{rotate: this.state.anim1.interpolate({
				                inputRange: [-1.5, 1.5],
				                outputRange: ['-10deg', '10deg']
				              })
							}
						],
						border: '1px solid #ccc',

					}}
					onClick={this.anim1Click}
				>
					2
				</Animated.div>
			</React.Fragment>
		)
	}
}