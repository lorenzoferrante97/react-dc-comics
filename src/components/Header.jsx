
// header component function

export default function Header() {
    return (

        <>
            <header className="flex flex-col md:flex-row justify-between items-center gap-5 p-7 bg-gray-50">
                {/* logo */}
                <figure>
                    <img src="../../public/dc-logo.png" alt="DC Comics logo" />
                </figure>

                {/* nav */}
                <nav>
                    <ul className="flex flex-wrap gap-3 justify-center">
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
            </header>
        </>

    );
}