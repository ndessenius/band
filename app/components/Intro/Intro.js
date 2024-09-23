"use client";

import { useRef, useState, useEffect } from "react";
import BandIdentity from "../BandIdentity/BandIdentity";
import Container from "@/app/global-components/Container/Container";
import IntroTourDates from "../IntroTourDates/IntroTourDates";
import NewAlbum from "../NewAlbum/NewAlbum";
import BackToTop from "../BackToTop/BackToTop";
import Image from "next/image";

import { useIsIntersecting } from "@/app/util/useObserver";
import CookieConsent from "react-cookie-consent";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0,
};

export default function Intro() {
	const [scrolledDown, setScrolledDown] = useState(false);
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef, true);

	useEffect(() => {
		const { scrollY } = window;
		if (scrollY > 50 && !isIntersecting) {
			setScrolledDown(true);
		}
	}, [isIntersecting]);

	return (
		<section id="intro" className={`relative flex flex-col items-center h-[calc(100vh-3rem)] w-full overflow-hidden max-h-[93rem] min-h-[43rem] lg:h-screen lg:flex-row lg:justify-start`} ref={sectionRef}>
			<BandIdentity />
			
			
				

				<Image classname="z-10 object-cover w-full h-full" src="/back.png" width={1456} height={816} alt="back" />


				
			{/* 	<video autoPlay muted loop poster="/frame-band.jpg" className="z-10 object-cover w-full h-full" playsInline>
					<source src="./video-band.webm" type="video/webm" />
					<source src="./video-band.mp4" type="video/mp4" />
					<p>
						Your browser doesn&#8217;t support HTML video. Here is a<a href="./video-band.mp4">link to the video</a> instead.
					</p>
				</video> */}

		
			
			<NewAlbum customClasses="mt-auto z-50 lg:hidden" />
			<BackToTop customClasses={`reveal${!isIntersecting && scrolledDown ? " visible" : ""}`} />
			<CookieConsent
				disableStyles={true}
				buttonText="Consent"
				cookieName="cookie_consent"
				buttonClasses="bg-yellow-btn-primary rounded-full p-1 px-3 text-sm text-xs text-white"
				containerClasses="w-full fixed !bottom-0 bg-fluo-green p-3 z-[50] lg:bg-stone-300/70 lg:backdrop-blur-lg lg:left-8 lg:!bottom-2 lg:rounded-md lg:max-w-md"
				contentClasses="text-sm leading-none mb-1 lg:text-white"
				expires={20}>
				This website uses cookies to enhance the user experience.
			</CookieConsent>
		</section>
	);
}
