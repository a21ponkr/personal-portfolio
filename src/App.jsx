import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Whoami from './components/Whoami';
import Works from './components/Works';
import Tools from './components/Tools';
import Navbar from './components/Navbar';


function App(){
	// const [theme, setTheme] = useState(null);

	// useEffect(() => {
	// 	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 		setTheme('dark');
	// 	} else {
	// 		setTheme('light');
	// 	}
	// }, []);

	// const handleThemeSwitch = () => {
	// 	setTheme(theme === 'dark' ? 'light' : 'dark');
	// };

	// useEffect(() => {
	// 	if (theme === 'dark') {
	// 		document.documentElement.classList.add('dark');
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 	}
	// }, [theme]);

	return (
		<>
			{/* <button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-2 text-4xl top-2 h-10 px-10 m-4 transition-colors duration-150 rounded-lg focus:shadow-outline bg-transparent p-1"
			>
				{theme === 'dark' ? '🌟' : '🌞'}
			</button> */}
			<div className="bg-black min-h-screen">
				<div className="max-w-6xl w-11/12 mx-auto">
					<Navbar></Navbar>
					<HeroSection></HeroSection>
					<Whoami></Whoami>
					<Tools></Tools>
					<Works></Works>
				</div>
			</div>
		</>
	);
}

export default App;