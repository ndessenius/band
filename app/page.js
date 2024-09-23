import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import Shows from "./components/Shows/Shows";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200">
				{/* <Intro /> */}
				{/* <About /> */}
				<Listen />
				{/* <Shows /> */}
				{/* <ContactUs /> */}
				{/* <PhotoGallery /> */}
			</main>
		</>
	);
}
