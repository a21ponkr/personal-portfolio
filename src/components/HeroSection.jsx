import React from 'react';
import logo from '../myself.jpg';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col pb-20">
			<div className="object-center">
			<img className="rounded-full border-dashed border-2 border-white " src={logo} width="200" height="auto" />
			</div>
			<div className="text-center">
				<h1 className="text-8xl md:text-8xl mb-1 md:mb-3 text-white font-semibold pt-20 font-aesthetic">
					Pontus Kronenberg
				</h1>
				<h4 className="text-md md:text-2xl text-white">Hello <p className="animate-wave inline-block">👋</p> My name is Pontus Kronenberg and I am currently studying my second year of Computer Science.</h4>
				{/* <a
					href="#projects"
					className="hover:-translate-y-0.5 transform transition inline-block shadow-xl shadow-fuchsia-500/25 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-violet-700 to-fuchsia-700 md:text-md "
				>
					<h1 className="font-semibold">See Projects !</h1>
				</a> */}
			</div>
		</div>
	);
}

export default HeroSection;