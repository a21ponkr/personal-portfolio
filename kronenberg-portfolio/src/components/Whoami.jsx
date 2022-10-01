import React from 'react';
import whoami from '../data/whoami';
import SectionTitle from './SectionTitle';
import WhoamiItem from './WhoamiItem';

function Whoami() {
	return (
		<div className="py-12">
			<SectionTitle>✨ Who I Am ✨</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{whoami.map(whoami => (
					
					<WhoamiItem
						key={whoami.key}
						title={whoami.title}
						icon={whoami.icon}
						description={whoami.description}
					/>

				
				))}
				
			</div>
		</div>
	);
}

export default Whoami;