
// header component function

export default function Header() {
    return (

        <>
            <header className="bg-gray-50 w-full py-10">
                {/* header container */}
                <div className="max-w-[92%] mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
                    {/* logo */}
                    <figure className="w-14">
                        <img src="../../public/dc-logo.png" alt="DC Comics logo" />
                    </figure>

                    {/* nav */}
                    <nav className="md:max-lg:max-w-[72%]">
                        <ul className="flex flex-wrap gap-3 justify-center md:justify-end">
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>Tv</li>
                            <li>Games</li>
                            <li>Collectibles</li>
                            <li>Videos</li>
                            <li>Fans</li>
                            <li>News</li>
                            <li>Shop</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>

    );
}