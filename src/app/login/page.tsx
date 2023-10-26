"use client";
import LoginCard from "../../components/LoginCard";
import logo from "../../assets/images/logo.svg";
import footerLogo from "../../assets/images/footerlogo.png";
import Image from "next/image";
export default function Login() {
	return (
		<section className="m-10 flex flex-col justify-between gap-6">
			<Image src={logo} alt="logo-image" />
			<main className="flex  items-center justify-center">
				<LoginCard></LoginCard>
			</main>
			<footer className="flex justify-between items-center">
				<p>حميع الحقوق محفوظة &copy; تكنكة 2023</p>
				<span className="flex items-center justify-center">
					<p>تطوير و تشغيل</p>
					<Image src={footerLogo} alt="logo-image" />
					<p>لتقنية المعلومات</p>
				</span>
			</footer>
		</section>
	);
}
