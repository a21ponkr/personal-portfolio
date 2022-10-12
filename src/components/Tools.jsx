import React from 'react';
import SectionTitle from './SectionTitle';
import tools from '../data/tools';
import ToolsItem from './ToolsItem';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>

function Tools() {
	return (
		<div className="py-12">
			<div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 pt-10">
				{tools.map(tools => (
					
					<ToolsItem
						key={tools.key}
						icon={tools.icon}
					/>
				))}
				
			</div>
		</div>
	);
}

export default Tools;