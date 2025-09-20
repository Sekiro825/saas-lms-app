import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <img src="/images/logo.svg" alt="Logo" width={46} height={44} />
            </div>
        </a>
        <div className="flex items-center gap-8">
            <NavItems/>
            <p>Sign-in</p>
        </div>
    </nav>
  )
}

export default Navbar