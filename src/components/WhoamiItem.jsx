import React from 'react';

function WhoamiItem({ title, icon, description, whoamiUrl }) {
	return (
	<a
	href={whoamiUrl}
	target="_blank"
	rel="noreferrer"
	>
		<div className="shadow-2xl shadow-fuchsia-500/25 bg-white text-black hover:text-white hover:bg-black rounded-md hover:-translate-y-1 transform transition p-3">
			<div className=" w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg  mb-1">
				{title}
			</h1>
			<p className="text-md ">
				{description}
			</p>
		</div>
	</a>
	);
}

export default WhoamiItem;