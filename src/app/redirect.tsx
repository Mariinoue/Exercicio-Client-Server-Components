'use server'
import { permanentRedirect } from 'next/navigation'

const RedirectServer = ({ path }: { path: string }) => {
  permanentRedirect(path)
}

export default RedirectServer

