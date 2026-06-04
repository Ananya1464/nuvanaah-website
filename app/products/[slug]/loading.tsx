export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf7f2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8">
        <div className="h-4 w-32 rounded-full bg-[#ded0bf]/50" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-square rounded-2xl bg-[#ded0bf]/30" />
          <div className="space-y-4">
            <div className="h-3 w-24 rounded-full bg-[#ded0bf]/40" />
            <div className="h-10 w-3/4 rounded bg-[#ded0bf]/40" />
            <div className="h-4 w-1/2 rounded bg-[#ded0bf]/40" />
            <div className="h-8 w-40 rounded-full bg-[#ded0bf]/40" />
            <div className="space-y-3 pt-4">
              <div className="h-12 rounded-full bg-[#ded0bf]/35" />
              <div className="h-12 rounded-full bg-[#ded0bf]/35" />
              <div className="h-12 rounded-full bg-[#ded0bf]/35" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
