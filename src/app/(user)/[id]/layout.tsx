import Link from "next/link"

interface UserLayoutProps {
  children: React.ReactNode
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (<div className="dashboard-layout min-h-screen flex flex-col">
    <header className="bg-gray-800 text-white py-4">
      <h1 className="text-3xl text-center">User</h1>
    </header>
    <div className="flex flex-1">
      <aside className="bg-gray-800 text-white w-64 p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                To restrict Area
              </Link>
            </li>
            <li>
              <Link href="/1" className="block py-2 px-4 rounded hover:bg-gray-700">
                My Profile
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="content flex-1 p-4">
        {children}
      </div>
    </div>
  </div>
  )
}

export default UserLayout