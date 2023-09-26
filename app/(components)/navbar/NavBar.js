import Link from 'next/link';
const NavBar = () => {
    return (
        <div >
              <nav>
            <Link href="/" class="logo">Xplore
                <i class="fab fa-staylinked"></i>kill
            </Link>
            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        </div>
    );
}

export default NavBar;
