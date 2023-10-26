import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import CircleVideo from "../components/CircleVideo";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tknka",
	description: "Mostaql Demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ar">
			<body
				className={`${cairo.className} md:bg-[url('../assets/images/background.png')] bg-no-repeat bg-center overflow-hidden`}>
				<CircleVideo />
				{children}
			</body>
		</html>
	);
}
