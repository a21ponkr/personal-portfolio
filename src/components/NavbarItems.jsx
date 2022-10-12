import React from 'react';

function ToolsItem({ title, icon }) {
	return (
		<div className="flex flex-wrap">
			<div className=" text-white">
				{icon}
			</div>
		</div>
	);
}

export default ToolsItem;