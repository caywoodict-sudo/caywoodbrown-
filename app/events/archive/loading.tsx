import { Skeleton } from "@/components/ui/skeleton"

export default function EventsArchiveLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gray-200 animate-pulse">
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="mx-auto w-3/4 max-w-[700px]">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-2/3 mx-auto" />
          </div>
        </div>
      </section>

      {/* Search and Filter Section Skeleton */}
      <section className="sticky top-16 z-30 w-full py-4 bg-white border-b shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Skeleton className="h-10 w-48 rounded-md" />
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-12" />
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Grid Skeleton */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-5 w-96" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-md overflow-hidden shadow-sm border border-gray-100">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-16 w-16 rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-40" />
                      <Skeleton className="h-4 w-20 rounded-full" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Year in Review Section Skeleton */}
      <section className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <Skeleton className="h-6 w-32 rounded-full" />
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
              </div>
              <Skeleton className="h-10 w-48 rounded-md" />
            </div>
            <Skeleton className="aspect-video rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Event Galleries Section Skeleton */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-full max-w-3xl mx-auto" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="aspect-video rounded-xl" />
            ))}
          </div>

          <div className="text-center mt-8">
            <Skeleton className="h-10 w-48 mx-auto rounded-md" />
          </div>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Skeleton className="h-10 w-96 mx-auto" />
            <Skeleton className="h-5 w-full max-w-[700px] mx-auto" />
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Skeleton className="h-12 w-full rounded-md" />
              <Skeleton className="h-12 w-32 rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
