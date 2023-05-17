import Header from "./components/Header";
import ItemShowcase from "./components/ItemShowcase";
import PromoBanner from "./components/PromoBanner";
import ItemShowcaseTwoWide from "./components/ItemShowcaseTwoWide.";

import RazerBladeImg from "./assets/razer-blade.jpeg";
import RazerKairaXImg from "./assets/razer-kaira-x.jpeg";
import Razercon2022Img from "./assets/razercon2022.jpeg";
import PrimeDayImg from "./assets/prime-day-campaign.jpeg";
import XboxStandImg from "./assets/xbox-stand.jpeg";
import RazerBlade15Img from "./assets/razer-blade-15.jpeg";
import LeviathanV2XImg from "./assets/leviathanv2-x.jpeg";
import RazerEnkiProImg from "./assets/razer-enki-pro.jpeg";
import RazerStoreRewardsImg from "./assets/razerstore-rewards.jpeg";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<PromoBanner />
			<ItemShowcase
				title="NEW RAZER BLADE 14"
				description={`THE ULTIMATE 14" GAMING LAPTOP`}
				img={RazerBladeImg}
				link1="/"
				link2="/"
			/>
			<ItemShowcase
				title="RAZER KAIRA X - PLAYSTATION LICENSED"
				description="POWER. CLARITY. COMFORT"
				img={RazerKairaXImg}
				link1="/"
				link2="/"
			/>
			<ItemShowcase
				title="RAZERCON 2022"
				description="A DIGITAL CELEBRATION FOR GAMERS. BY GAMERS"
				img={Razercon2022Img}
				link1="/"
				link1Text="Sign Up Now"
			/>
			<ItemShowcaseTwoWide
				item1={{
					title: "TIME FOR PRIME",
					description: "YOUR PERFECT WINDOW FOR EPIC UPGRADES",
					img: PrimeDayImg,
					link1: "/",
					link1Text: "Shop Exclusive Deals",
					small: true,
				}}
				item2={{
					title: "UNIVERSAL QUICK CHARGING STAND FOR XBOX",
					description: "POWER YOUR PLAY",
					img: XboxStandImg,
					link1: "/",
					link2: "/",
					small: true,
				}}
			/>
			<ItemShowcaseTwoWide
				item1={{
					title: "NEW RAZER BLADE 15",
					description: "WORLDS FIRST 140Hz OLED LAPTOP",
					img: RazerBlade15Img,
					link1: "/",
					link2: "/",
					small: true,
				}}
				item2={{
					title: "RAZER LEVIATHAN V2 X",
					description: "ILLUMINATE YOUR SOUND",
					img: LeviathanV2XImg,
					link1: "/",
					link2: "/",
					small: true,
				}}
			/>
			<ItemShowcaseTwoWide
				item1={{
					title: "RAZER ENKI PRO",
					description: "ULTIMATE ALL-DAY COMFORT",
					img: RazerEnkiProImg,
					link1: "/",
					link2: "/",
					link1Text: "Koenigsegg Edition",
					link2Text: "Williams Esports Edition",
					small: true,
					exclusive: true,
				}}
				item2={{
					title: "GLOW LIKE A PRO",
					description: "RAZERSTORE REWARDS GIVEAWAY",
					img: RazerStoreRewardsImg,
					link1: "/",
					link1Text: "Join Now",
					small: true,
				}}
			/>
			<Footer />
		</>
	);
}

export default App;
