import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function PromoBanner() {
	return (
		<div className="w-full  bg-[#555555] mt-[58px]">
			<div className="w-[100%] py-2 text-center mx-auto">
				<p className="text-white text-sm">
					<a
						href="https://www.razer.com/gb-en"
						className="hover:underline"
					>
						Razer.com
					</a>
					{"  "}
					clone by
					{"  "}
					<a
						href="https://github.com/george-593"
						className="hover:underline text-gray-300 font-bold"
					>
						George Lowe
					</a>
					<AiOutlineArrowRight className="inline text-gray-300" />
				</p>
			</div>
		</div>
	);
}

export default PromoBanner;
