import React from 'react';

function WhoamiItem({ title, icon, description }) {
	return (
		<div className="shadow-xl shadow-fuchsia-500/25 bg-gradient-to-r from-violet-500 to-fuchsia-700 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-1 transform transition rounded-md p-5">
			<div className="text-gray-800 dark:text-gray-300 w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-white dark:text-white mb-1">
				{title}
			</h1>
			<p className="text-md text-white dark:text-white">{description}</p>
		</div>
	);
}

export default WhoamiItem;