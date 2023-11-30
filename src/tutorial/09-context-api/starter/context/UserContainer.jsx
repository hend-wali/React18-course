import { useAppContext } from "./Navbar"


const UserContainer = () => {

    const { user, logout } = useAppContext


    return (
        <div className='user-container'>
            {user ? (<div>
                <p>hello ! {user?.name} </p>
                <button className='btn' onClick={logout}>
                    logout
                </button>
            </div>
            ) : (
                <p> please login !</p>
            )
            }
        </div>
    )
}

export default UserContainer