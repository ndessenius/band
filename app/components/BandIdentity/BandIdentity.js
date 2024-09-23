"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import NewAlbum from "../NewAlbum/NewAlbum";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";

export default function BandIdentity() {
	return (
		<>
			<div className="z-50 w-full py-3 lg:hidden">
				<Container customClasses="px-2.5 flex items-center justify-between font-sm">
				 	<Image className="max-w-[6rem] h-auto bg-blue-900 " src="/logo.svg" width={324} height={236} alt="L3M" />
					<ScrollTo toId="shows" duration={1500}>
						{/* <ButtonPrimary customClasses="text-sm">Live gigs</ButtonPrimary> */}
					</ScrollTo>
				</Container>
			</div>
			<div className="z-10 flex-col justify-between hidden h-full bg-black grow-0 shrink-0 lg:flex">
				<div className="logo-container border-y-[1.25rem] border-king-blue py-4 opacity-1">
					<Image className="px-12 py-3 max-w-[18.75rem] h-auto" src="/logo.svg" width={324} height={236} alt="L3M Logo" />
				</div>
				<NewAlbum />
			</div>
		</>
	);
}
