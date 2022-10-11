import React from 'react';
import SectionTitle from './SectionTitle';
import tools from '../data/tools';
import ToolsItem from './ToolsItem';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>

function Tools() {
	return (
		<div className="py-12">
			<SectionTitle>✨ Tools I use ✨</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{tools.map(tools => (
					
					<ToolsItem
						key={tools.key}
						title={tools.title}
						icon={tools.icon}
					/>
				))}
				
			</div>
		</div>
	);
}

export default Tools;