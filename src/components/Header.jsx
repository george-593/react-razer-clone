import React from "react";
import { useState } from "react";

import LogoImg from "../assets/razer-logo.svg";
import ArrowPointer from "../assets/bg-arrow-pointer.png";

import { AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

function Header() {
	const [searchOpen, setSearchOpen] = useState(false);

	function handleSearch() {
		setSearchOpen(!searchOpen);
	}

	function handleChange(e) {
		if (e.target.value != "Search razer.com") {
			e.target.classList.remove("text-gray-500");
			e.target.classList.add("text-white");
		}

		if (e.target.value.includes("Search razer.com")) {
			e.target.value = e.target.value.replace("Search razer.com", "");
		}

		if (e.target.value == "Search razer.co") {
			e.target.value = "";
		}
	}

	return (
		<div className="w-full bg-black absolute top-0 left-0">
			{/* Main Header*/}
			<div
				className={
					searchOpen
						? "hidden"
						: "flex justify-between items-center py-2 w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto"
				}
			>
				<img src={LogoImg} alt="" className="h-10" />
				<a href="/" className="hover:text-white text-gray-500 px-2">
					PC
				</a>
				<a href="/" className="hover:text-white text-gray-500 px-2">
					Console
				</a>
				<a href="/" className="hover:text-white text-gray-500 px-2">
					Mobile
				</a>
				<a href="/" className="hover:text-white text-gray-500 px-2">
					Lifestyle
				</a>
				<a href="/" className="hover:text-white text-gray-500 px-2">
					Services
				</a>
				<a href="/" className="hover:text-white text-gray-500 px-2">
					Community
				</a>
				<a href="/" className="hover:text-white text-gray-500 px-2">
					Support
				</a>
				<a href="/" className="hover:text-white text-gray-500 px-2">
					Store
				</a>
				<AiOutlineSearch
					className="text-gray-500 hover:text-white text-[22px] hover:cursor-pointer"
					onClick={handleSearch}
				/>
				<CgShoppingCart className="text-gray-500 hover:text-white text-[22px] hover:cursor-pointer" />
			</div>
			{/* Search Bar Popup */}
			<div
				className={
					searchOpen
						? "flex justify-center items-center w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto"
						: "hidden"
				}
			>
				<img src={LogoImg} alt="/" className="h-10 mr-10" />
				<div className="bg-razer-light-black py-4 w-full flex justify-between items-center">
					<div className="flex justify-start flex-1">
						<AiOutlineSearch className="text-gray-500 text-[22px] ml-[10px]" />
						<form className="mx-2 flex-1">
							<input
								type="text"
								className="w-full bg-transparent text-gray-500 outline-none"
								defaultValue="Search razer.com"
								onChange={handleChange}
							/>
						</form>
					</div>
					<VscChromeClose
						className="text-gray-500 text-[22px] hover:cursor-pointer mr-6"
						onClick={handleSearch}
					/>
				</div>
			</div>

			{/* Green Divider Line */}
			<div className="w-full h-[2px] bg-razer-green"></div>
		</div>
	);
}

export default Header;
