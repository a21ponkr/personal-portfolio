import React from 'react'

function WorkItem({ imgUrl, title, tech, workUrl }) {
	return (
		<a
			href={workUrl}
			target="_blank"
			rel="noreferrer"
		>
			<img
				src={imgUrl}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-3 text-white gap-5 flex flex-wrap">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
					{title}
				</h3>
				<p className="text-xs space-x-2.5 md:text-sm">
					{tech.map(item => (
						<span
							key={item}
							className="inline-block px-2 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-700 rounded-md"
						>
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
}

export default WorkItem;