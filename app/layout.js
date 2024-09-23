import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
	title: "Les 3 Mousquetaires",
	description: "Les 3 Mousquetaires band website",
	verification: {
		google: "ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="text-2xl bg-gradient-to-r from-blue-200 to-cyan-200 font-poppins font-rendering xl:text-3xl">
				{children}
				<Footer />
			</body>
		</html>
	);
}
