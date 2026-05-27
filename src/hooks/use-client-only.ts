import { useEffect, useState } from 'react'

/**
 * Hook to determine if code is running on the client side
 * Prevents hydration mismatches by ensuring client-only code
 * only runs after initial render
 */
export function useClientOnly() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}