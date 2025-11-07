export default function SectionDivider() {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center">
        <div className="bg-white px-4">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
