import React from 'react';

function NavbarItems({ icon, navbarUrl }) {
	return (

    <a
        href={navbarUrl}
        target="_blank"
        rel="noreferrer"
    >
		<div className="flex flex-wrap space-x-5 place-content-center pb-10">
			<div className=" text-white">
				{icon}
			</div>
		</div>
    </a>
	);
}

export default NavbarItems;