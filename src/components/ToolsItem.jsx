import React from 'react';

function ToolsItem({ title, icon }) {
	return (
		<div className="flex flex-wrap space-x-5">
			<div className="text-white">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-white">
				{title}
			</h1>
		</div>
	);
}

export default ToolsItem;