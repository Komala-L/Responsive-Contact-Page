const Navigation = () => {
  return (
    <nav className="h-20 w-full flex items-center justify-between px-8">
        <div className="logo h-20 w-20">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0DNzTYNKKqw92uaBFGj2PFWUfY3e4lIroA&s"></img>
        </div>

        <div className="sections flex items-center justify-center">
            <ul className="flex gap-15">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation