import React from 'react';
import logo from '../myself.jpg';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="object-center">
			<img className="rounded-full border-dashed border-2 border-sky-500 " src={logo} width="200" height="auto" />
			</div>
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-sky-500 font-semibold dark: text-sky">
					Pontus Kronenberg
				</h1>
				<p className="text-md md:text-xl max-w-xl mb-3 text-gray-300">
					Hello! My name is Pontus Kronenberg and I am currently studying my second year of Computer Science. Thanks for visiting my portfolio! 😎
					
					{' '}
				</p>
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