export default function CategoryLoading() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-60 bg-gray-200" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-1/3 bg-gray-200 rounded mt-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
