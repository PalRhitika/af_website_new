function CopyrightBar() {
  return (
    <div className="bg-[#266d67] text-gray-200 text-sm py-3">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-3">
        <div>© {new Date().getFullYear()} Aaviyanta Foundation. All rights reserved.</div>
        <div className="text-xs">Designed with care. ❤️ </div>
      </div>
    </div>
  );
}

export default CopyrightBar
