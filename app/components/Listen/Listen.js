"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Container from "@/app/global-components/Container/Container";
import { Spotify, SoundCloud, Youtube, AppleMusic, Tidal } from "@/app/svg-icons/svg-icons";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function Listen() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	return (
		<section id="listen" className={`w-full mt-16 lg:mt-56 reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container customClasses="flex flex-col lg:flex-row">
				<div className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl">
					<p>Bientôt disponible :</p>
					<h2 className="inline-block pb-6 text-5xl font-semibold text-transparent bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text">Le Creux de la vague</h2>
					<p>Sortie le 27 septembre 2024 sur toutes les plateformes de Streaming. 🎉</p>

					<p className="py-4 subpixel-antialiased font-light font-permanentMarker "> Précommandez sur <a className="hover:text-medium-blue" href="https://music.apple.com/us/album/le-creux-de-la-vague/1770182110?uo=4" target="_blank">iTunes ! </a></p>
					<div className="flex items-center gap-4 pt-4">
						<Spotify extraClasses="fill-black hover:fill-green-500 transition-all"/>
						{/* <SoundCloud /> */}
						<Youtube extraClasses="fill-black hover:fill-red-700 transition-all" />
						{/* <Tidal /> */}
						<a href="https://music.apple.com/us/album/le-creux-de-la-vague/1770182110?uo=4" target="_blank"><AppleMusic extraClasses="fill-black hover:fill-red-700 transition-all" /></a>
					</div>
				</div>
				<div className="flex items-center justify-center mt-20 basis-2/4 lg:mt-0 lg:justify-end">
					<AudioPlayer />
				</div>
			</Container>
		</section>
	);
}
