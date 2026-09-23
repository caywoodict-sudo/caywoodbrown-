import { Skeleton } from "@/components/ui/skeleton"

export default function EventsLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-200 animate-pulse">
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="mx-auto w-3/4 max-w-[700px]">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-2/3 mx-auto mb-8" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40 rounded-md" />
            <Skeleton className="h-12 w-40 rounded-md" />
          </div>
        </div>
      </section>

      {/* Search and Filter Section Skeleton */}
      <section className="sticky top-16 z-30 w-full py-4 bg-white border-b shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-auto md:min-w-[300px] flex-1">
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

      {/* Featured Events Section Skeleton */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Skeleton className="h-6 w-40 rounded-full" />
            <Skeleton className="h-10 w-96 rounded-md" />
            <Skeleton className="h-5 w-full max-w-[700px]" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg">
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
                  <Skeleton className="h-4 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Skeleton */}
      <section className="w-full py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center mb-8">
            <Skeleton className="h-10 w-64 rounded-md" />
          </div>

          {/* Upcoming Events Section Skeleton */}
          <section className="w-full py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <Skeleton className="h-6 w-32 rounded-full mb-4" />
                <Skeleton className="h-10 w-64" />
              </div>
            </div>

            <div className="grid gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-md overflow-hidden shadow-sm border border-gray-100">
                  <div className="grid md:grid-cols-4 gap-4">
                    <Skeleton className="h-40 md:h-full min-h-[160px]" />
                    <div className="md:col-span-3 p-6 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <Skeleton className="h-6 w-64" />
                          <div className="flex flex-wrap gap-2">
                            <Skeleton className="h-5 w-20 rounded-full" />
                            <Skeleton className="h-5 w-24 rounded-full" />
                          </div>
                        </div>
                        <Skeleton className="h-16 w-16 rounded-lg" />
                      </div>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-4 w-40" />
                        </div>
                        <Skeleton className="h-10 w-32 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Skeleton className="h-10 w-96 mx-auto" />
            <Skeleton className="h-5 w-full max-w-[700px] mx-auto" />
            <Skeleton className="h-5 w-3/4 mx-auto" />
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Skeleton className="h-12 w-full rounded-md" />
              <Skeleton className="h-12 w-32 rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Host Your Own Event Section Skeleton */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <Skeleton className="h-6 w-32 rounded-full" />
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
              <Skeleton className="h-10 w-48 rounded-md" />
            </div>
            <Skeleton className="aspect-video rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  )
}
