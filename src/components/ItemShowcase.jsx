import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

function ItemShowcase({
	title,
	description,
	img,
	link1,
	link2,
	link1Text,
	link2Text,
	small,
	exclusive,
}) {
	return (
		<div
			className={
				small
					? "h-[580px] relative bg-razer-light-black"
					: "h-[710px] relative bg-razer-light-black"
			}
		>
			{/* Background Image */}
			<div
				className={
					small
						? "w-full h-[570px] absolute"
						: "w-full h-[700px] absolute"
				}
			>
				<img
					src={img}
					alt="/"
					className="w-full h-full object-cover select-none"
				/>
			</div>

			{/* Overlay */}
			<a
				className={
					small
						? "w-full h-[570px] absolute text-center"
						: "w-full h-[700px] absolute text-center"
				}
				href={link1}
			>
				<h1 className="font-bold text-white text-[40px] mt-20 font-razerF5">
					{title}
				</h1>
				<h2 className="text-white text-[21px] mt-2 font-razerF5">
					{description}
				</h2>

				<div className="flex justify-center align-middle">
					<a href={link1} className="text-white hover:underline mx-4">
						{link1Text ? link1Text : "Learn More"}{" "}
						<AiOutlineArrowRight className="inline text-razer-green" />
					</a>

					<a
						href={link2}
						className={
							link2 ? "text-white hover:underline mx-4" : "hidden"
						}
					>
						{link2Text ? link2Text : "Buy"}{" "}
						<AiOutlineArrowRight className="inline text-razer-green" />
					</a>
				</div>
			</a>
		</div>
	);
}

export default ItemShowcase;
