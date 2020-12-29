import React from "react";
import "./MusicPlayer.css";

const MusicPlayer = () => {
	return (
		<div className='hehe'>
			<div className='firstLayer'>
				<span id='makeItRed'>2:14</span>
				<p>Rammstein - Rein Raus</p>
				<span>3:27</span>
			</div>
			<div className='secondLayer'>
				<div className='secondLayerTwo'></div>
			</div>
			<div className='thirdLayer'>
				<div className='pressPlay'>
					<i className='far fa-play-circle'></i>
					<i className='fas fa-forward'></i>
					<i className='fas fa-backward'></i>
					<i className='far fa-stop-circle'></i>
				</div>
				<div className='volume'>
					<i className='fas fa-volume-up'></i>
					<div className='loading'>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MusicPlayer;
