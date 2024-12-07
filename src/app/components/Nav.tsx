
function Nav() {
    return (
        <ul className="w-[1010px] flex text-lg text-black opacity-80 border-b-[1px] border-gray-300">
            <li className="pr-5 py-3">
                <a href="#" className="h-full font-bold b-bottom">Popular</a>
            </li>
            <li className="px-5 py-3">
                <a href="#" className="h-full">Upcoming</a>
            </li>
            <li className="px-5 py-3">
                <a href="#" className="h-full">Newly Launched</a>
            </li>
        </ul>
    )
}

export default Nav;
