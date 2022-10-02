import React from 'react';

function WhoamiItem({ title, icon, description }) {
	return (
		<div className="shadow-xl shadow-fuchsia-500/25 bg-gradient-to-r from-violet-500 to-fuchsia-700 bg-slate-800 hover:bg-slate-700 hover:-translate-y-1 transform transition rounded-md p-5">
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