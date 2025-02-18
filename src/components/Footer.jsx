

// footer component function

export default function Footer() {

    return (
        <>
            <footer>
                {/* top footer */}
                <div className="image-bg sm:h-[40vh] lg:h-[60vh] flex overflow-hidden justify-center items-center">
                    {/* top footer container */}
                    <div className="w-[92%] px-4 py-12 h-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        {/* navigation */}
                        <div className="flex flex-col sm:flex-wrap h-full gap-5">
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">Dc Comics</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>
                            </div>
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">Shop</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                                </ul>
                            </div>
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">DC</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    <li>Terms of use</li>
                                    <li>Privacy Policy</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                    <li>Subscriptions</li>
                                    <li>Talent Workshops</li>
                                    <li>CPSC Certificates</li>
                                    <li>Ratings</li>
                                    <li>Shop Help</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">Sites</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    <li>DC</li>
                                    <li>MAD Magazine</li>
                                    <li>DC Kids</li>
                                    <li>DC Universe</li>
                                    <li>DC Power Visa</li>
                                </ul>
                            </div>
                        </div>

                        {/* logo image */}
                        <figure className="hidden lg:inline-block relative xl:w-[60%]">
                            <img src="src/assets/imgs/dc-logo-bg.png" alt="DC logo" className="w-full" />
                        </figure>
                    </div>
                </div>

                {/* bottom footer */}
                <div>
                    
                </div>
            </footer>
        </>
    );
}