import React from "react";

import ItemShowcase from "./ItemShowcase";

function ItemShowcaseTwoWide({ item1, item2 }) {
	return (
		<div className="grid grid-cols-2 gap-[10px] bg-razer-light-black">
			<ItemShowcase {...item1} />
			<ItemShowcase {...item2} />
		</div>
	);
}

export default ItemShowcaseTwoWide;
