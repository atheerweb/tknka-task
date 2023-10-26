import TknkaInput from "./TknkaInput";
import TknkaLink from "./TknkaLink";
export default function LoginCard() {
	return (
		<div className="flex flex-col items-center justify-between  shadow-md shadow-cyan-600/20 rounded-xl bg-transparent h-[27em]   md:h-[37em] overflow-hidden p-5  md:p-12 pt-8  md:pt-20  w-screen">
			<h2 className="text-2xl md:text-4xl font-bold text-sky-600">تسجيل الدخول</h2>
			<form className="flex flex-col gap-3 w-full">
				<TknkaInput placeholder={"أدخل البريد الالكتروني"}></TknkaInput>
				<TknkaInput placeholder={"أدخل كلمة المرور"}></TknkaInput>
				<TknkaLink text={"هل نسيت كلمة المرور؟"}></TknkaLink>
			</form>
			<div className="w-full flex flex-col items-center justify-center">
				<button className=" md:text-xl bg-sky-600 w-full text-white rounded-xl h-12 md:h-16">
					تسجيل الدخول
				</button>
				<span className="flex mt-4">
					<p>ليس لديك حساب؟</p>
					<TknkaLink text={"انشاء حساب جديد"}></TknkaLink>
				</span>
			</div>
		</div>
	);
}
