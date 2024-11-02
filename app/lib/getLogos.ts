// lib/getLogos.ts
import fs from "fs";
import path from "path";

export const getLogos = () => {
	const bannerDir = path.join(process.cwd(), "public/banner");
	const files = fs.readdirSync(bannerDir);

	// Only return files with valid image extensions
	const logoFiles = files.filter((file) =>
		/\.(png|jpg|jpeg|svg|webp)$/.test(file)
	);

	return logoFiles;
};

export const nameMapping: { [key: string]: string } = {
	"Ankara 1.png": "https://www.ankara.edu.tr/",
	"boston univeristy.png": "https://www.bu.edu/",
	"CoARA working group.png": "https://coara.eu/",
	"GoFair.png": "https://www.go-fair.org/",
	"Group 1630.png": "https://intuition.systems/",
	"image 17.png": "https://desci.com/",
	"image 28.png": "https://numfocus.org/",
	"image 30.png": "https://www.drips.network/",
	"image 34.png": "https://www.lab.bio/",
	"image 33.png": "https://attest.org/",
	"image 35.png": "https://hypercerts-org.vercel.app/",
	"image 36.png": "https://www.algovera.ai/",
	"image 37.png": "https://index.network/",
	"image 38.png": "https://ipfs.tech/",
	"image 72.png": "https://ipshipyard.com/",
	"image 74.png": "https://bacalhau.org/",
	"image 75.png": "https://block.science/",
	"image 76.png": "https://nevermined.app/",
	"image 77.png": "https://www.coordination.network/",
	"Mask group.png": "https://useorbis.com/",
	"mit.png": "https://web.mit.edu/",
	"nees.png": "https://www.nees.ufal.br/vagas_arquives/engenheiroa-de-dados/",
	"Open Science.png": "https://www.opensource.science/",
	"Screen Shot 2024-01-17 at 12.38 1.png": "https://csensemakers.com/",
	"University Coloardo Denver.png": "https://www.ucdenver.edu/",
	"university of manchester.png": "https://www.manchester.ac.uk/",
	"Vreije universiteit 1.png": "https://vu.nl/nl",
};
