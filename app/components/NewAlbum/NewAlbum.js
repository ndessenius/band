export default function NewAlbum({ customClasses }) {
	return (
		<div className={`flex flex-col items-center justify-center p-4${customClasses ? ` ${customClasses}` : ""}`}>
			<h4 className="text-xl text-blue-500 font-permanentMarker">Premier Album</h4>
			<h4 className="text-xl text-blue-700 font-rockSalt">Le Creux de la vague</h4>
			{/* <p className="text-base text-medium-blue font-poppins">Sortie le 27 septembre 2024</p> */}
		</div>
	);
}
