export default function ProductsLoading() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      {/* Page title */}
      <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-12" />

      {/* Products grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="h-60 bg-gray-200" />

            {/* Content */}
            <div className="p-5 space-y-3">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />

              <div className="flex justify-between items-center mt-4">
                <div className="h-4 w-1/4 bg-gray-200 rounded" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
