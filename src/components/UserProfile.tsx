import { User } from "../types/User"

type Props = {
    user: User
}

export default function UserProfile({user}: Props) {
    return (
        <div>
            <p><span>Username:</span> {user.username}</p>
            <p><span>Email:</span> {user.email}</p>
            {user.role === "admin" ? <button>Edit</button> : null }
        </div>
    )

}