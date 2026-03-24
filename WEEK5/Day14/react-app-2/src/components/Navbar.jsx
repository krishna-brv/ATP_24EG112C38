function Navbar(){

    return(
        <div className="flex  justify-between items-center bg-amber-100 ">
            <h1 className="text-4xl p-6">LOGO</h1>
            <ul className="list-none flex gap-10 text-center m-5">
                <li >Home</li>
                <li >SignUP</li>
                <li >Login</li>
            </ul>
        </div>
    )
}

export default Navbar;