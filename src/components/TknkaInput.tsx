export default function TknkaInput({ placeholder }: { placeholder: string }) {
	return (
		<input
			type="text"
			name=""
			placeholder={placeholder}
			className="border border-sky-600 rounded-xl md:text-xl p-4 md:w-96 w-full"
		/>
	);
}
