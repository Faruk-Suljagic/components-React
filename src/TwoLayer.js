import React from "react";
import "./TwoLayer.css";

const TwoLayer = () => {
	return (
		<div className='wrapper'>
			<div className='wrapperBox'>
				<div className='layerOne'>
					<button className='buttonLayer changePic'>Change Pic</button>
					<button className='buttonLayer Resize'>Resize</button>
					<button className='buttonLayer editPosition'>Edit Position</button>
				</div>
				<div className='layerTwo'>
					<p className='theseHills'>these cool hills</p>
					<p className='hillsText'>
						I was on these hills and I ate strawberries.Proin gravid nibh vel relit actor
						aliquot. Aenean sollicitudin. Hold da heathen hammer high! Nice edit
						consequent Epsom, new…
					</p>
					<button className='readMore'>read more</button>
				</div>
			</div>
		</div>
	);
};

export default TwoLayer;
