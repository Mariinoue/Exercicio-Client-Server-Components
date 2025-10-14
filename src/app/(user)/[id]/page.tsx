interface UserPageProps {
  params: {
    id: string
  }
}

const UserPage = ({ params }: UserPageProps) => {
  const { id } = params

  return (
    <div>
      <h1>User Page</h1>
      <p>This is the user page for {id}</p>
    </div>
  )
}

export default UserPage


