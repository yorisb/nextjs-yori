'use client'

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen w-full items-center justify-center bg-monochrome-50 dark:bg-monochrome-950">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="loading-dots mb-4 flex gap-2">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <p className="text-monochrome-600 dark:text-monochrome-400 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
}