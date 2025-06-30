export default function Header({ title, subtitle }) {
  return (
    <div className="py-7 text-white">
      <h1 className="text-5xl font-bold text-green-400">{title}</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl">{subtitle}</p>
    </div>
  );
}
