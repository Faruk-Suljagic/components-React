import "./App.css";
import MusicPlayer from "./MusicPlayer";
import NavBar from "./NavBar";
import Buttons from "./Buttons";
import TwoLayer from "./TwoLayer";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='statistics'>
					<p>website stats</p>
					<div className='stats'>
						<ul>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
							<li>
								<div></div>
							</li>
						</ul>
					</div>
				</div>
				<MusicPlayer />
				<NavBar />
				<Buttons />
				<TwoLayer />
			</header>
		</div>
	);
}

export default App;
