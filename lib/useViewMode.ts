'use client'
import { useSession } from 'next-auth/react'

export function useViewMode() {
  const { data } = useSession()
  const emailVerified = (data?.user as any)?.emailVerified
  const viewOnly = !emailVerified
  return { viewOnly, session: data }
}
