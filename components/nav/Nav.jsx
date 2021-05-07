import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-indigo-300 shadow-md sm:items-baseline w-full">
            <ul className="flex ">
                <li className="mx-4 hover:text-white "> 
                    <Link href='/'>Home</Link>
                </li>
                <li className="mx-4 hover:text-white">
                    <Link href='/contacts'>Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav