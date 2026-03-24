function User(props){

    const {userObj} = props;

    return(
        <div className="ring-4 rounded-3xl text-center p-2 shadow-2xl shadow-blue-600 bg-green-50">
            <img className="block m-auto rounded-2xl" src={userObj.image} alt="" />
            <h2>{userObj.name}</h2>
            <h3>{userObj.email}</h3>
            <button className="p-2  bg-gray-500 text-amber-50 " >Profile</button>
        </div>
    )
}

export default User;