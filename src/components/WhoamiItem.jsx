import React from 'react';

function WhoamiItem({ title, icon, description }) {
	return (
		<div className="shadow-2xl shadow-fuchsia-500/25 bg-black rounded-md hover:-translate-y-1 transform transition p-3">
			<div className="text-gray-300 w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-white mb-1">
				{title}
			</h1>
			<p className="text-md text-white">
				{description}
			</p>
		</div>
	);
}

export default WhoamiItem;