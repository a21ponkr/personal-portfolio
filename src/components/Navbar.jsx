import React from 'react';
import SectionTitle from './SectionTitle';
import navbar from '../data/navbar';
import NavbarItems from './ToolsItem';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>

function Navbar() {
	return (
		<div className="py-12">
			<div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
				{navbar.map(navbar => (
					
					<NavbarItems
						key={navbar.key}
						icon={navbar.icon}
					/>
				))}
				
			</div>
		</div>
	);
}

export default Navbar;