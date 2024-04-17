import React, { useEffect, useState } from "react";

import trafficLight from "../../img/Traffic Light.png";

//create your first component
const TrafficLight = () => {

	//variables
	const [selectedColor, setColor] = useState("");
	const [purple, setPurple] = useState(false);


	//main div style \./ \./						styles***
	const [mainDivStile] = useState(
		{height: "100%", width: "100%", position: "relative", margin: "0", display: "flex", flexDirection: "column", justifyContent: "center"}
		);
	//main div style  /.\ /.\

	//traffic light body stile \./ \./				styles***
	const [trafficLightBodyStile] = useState(
		{height: "60vh", position: "relative", margin: "5vh auto",}
	)
	//traffic light body stile /.\ /.\

	//lights front div style \./ \./				styles***
	const [lightsFrontDivStyle] = useState(
		{zIndex: "2", borderRadius: "2vh", position: "absolute", top: "10vh", left: "50%",transform: "translateX(-50%)",width: "17vh", height: "66vh"}
	)
	//lights front div style /.\ /.\

	//lights front style \./ \./					styles***
	const [lightsFrontStyle] = useState(
			{width: "13.7vh", height: "13.7vh", margin: "0.95vh 0 3.45vh 1.7vh", borderRadius: "99vh", border: "0.04vh solid black"}
	)
	//lights front style /.\ /.\

	//lights sides div style \./ \./				styles***
	const [lightsSidesDivStyle] = useState(
		{zIndex: "-1", position: "absolute", top: "10vh", left: "50%",transform: "translateX(-50%)", width: "27vh", height: "48vh"}
	)
	//lights front div style /.\ /.\

	//lights sides style \./ \./					styles***
	const [lightsSidesStyle] = useState(
		{width: "100%", height: "33%"}
	)
	//lights front style /.\ /.\

	//buttons div \./ \./							styles***
	const [buttonsDiv] = useState(
		{position: "relative", margin: "4vh auto 0 auto"}
		);
	//button style  /.\ /.\

	//buttons style \./ \./							styles***
	const [buttonsStyle] = useState(
		{width: "20vh", height: "10vh", margin: "3vh", borderRadius: "3vh"}
		);
	//button style  /.\ /.\


	return (
		<div style={mainDivStile}>

			<img src={trafficLight} style={trafficLightBodyStile} />

			<div style={{...lightsFrontDivStyle, ...{backgroundColor: (purple ? "rgb(43, 43, 43)" : "")}}}>
				<div style={{...lightsFrontStyle, ...(selectedColor === "red" || selectedColor === "pseudoYellow" ? {backgroundColor: "red", boxShadow: "0 0 9vh 5px red"} : {backgroundColor: "rgb(50, 0, 0)"})}} onClick={() => setColor("red")}></div>
				<div style={{...lightsFrontStyle, ...(selectedColor === "yellow" ? {backgroundColor: "yellow", boxShadow: "0 0 9vh 5px yellow"} : {backgroundColor: "rgb(50, 50, 0)"})}} onClick={() => setColor("yellow")}></div>
				<div style={{...lightsFrontStyle, ...(selectedColor === "green" ? {backgroundColor: "green", boxShadow: "0 0 9vh 5px green"} : {backgroundColor: "rgb(0, 50, 0)"})}} onClick={() => setColor("green")}></div>
				<div style={{...lightsFrontStyle, ...(selectedColor === "purple" ? {backgroundColor: "purple", boxShadow: "0 0 9vh 5px purple"} : {backgroundColor: "rgb(50, 0, 50)"}), ...{width: "12vh", height: "12vh", margin: "0.99vh 0 3.45vh 2.6vh"}, ...{visibility: (purple ? "visible" : "hidden")}}} onClick={() => setColor("purple")}></div>
			</div>

			<div style={lightsSidesDivStyle}>
				<div style={{...lightsSidesStyle, ...(selectedColor === "green" || selectedColor === "yellow" ? {backgroundColor: "red"} : {backgroundColor: "rgb(50, 0, 0)"})}}></div>
				<div style={{...lightsSidesStyle, ...(selectedColor === "pseudoYellow" ? {backgroundColor: "yellow"} : {backgroundColor: "rgb(50, 50, 0)"})}}></div>
				<div style={{...lightsSidesStyle, ...(selectedColor === "red" ? {backgroundColor: "green"} : {backgroundColor: "rgb(0, 50, 0)"})}}></div>
			</div>

			<div style={{...lightsSidesDivStyle, ...{zIndex: "1"}}}>
				<div style={lightsSidesStyle} onClick={() => setColor("green")}></div>
				<div style={lightsSidesStyle} onClick={() => setColor("pseudoYellow")}></div>
				<div style={lightsSidesStyle} onClick={() => setColor("red")}></div>
			</div>

			<div style={buttonsDiv}>
				<button type="button" style={buttonsStyle} onClick={() => setColor(selectedColor === "red" ? "pseudoYellow" : (selectedColor === "pseudoYellow" ? "green" : (selectedColor === "green" ? "yellow" : "red")))}>Cyle</button>
				<button type="button" style={buttonsStyle} onClick={() => setPurple(!purple)}>Purple</button>
			</div>

			<p style={{textAlign: "center"}} >In this project I tried to make the traffic light as realistic as possible, following a real pattern and the side lights are clickable as well</p>

		</div>
	);
};

export default TrafficLight;
