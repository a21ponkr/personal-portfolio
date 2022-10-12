import React from 'react';

function ToolsItem({ title, icon }) {
	return (
		<div className="flex flex-wrap space-x-5 place-content-center pb-10">
			<div className=" text-white">
				{icon}
			</div>
		</div>
	);
}

export default ToolsItem;