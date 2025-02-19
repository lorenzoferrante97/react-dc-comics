

// footer component function

export default function Footer(props) {

    const {linksMain, linksShop, linksDc, linksSites} = props;

    return (
        <>
            <footer>
                {/* top footer */}
                <div className="image-bg sm:h-[48vh] lg:h-[64vh] flex overflow-hidden justify-center items-center">
                    {/* top footer container */}
                    <div className="w-[92%] px-4 py-12 h-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        {/* navigation */}
                        <div className="flex flex-col sm:flex-wrap h-full gap-5 z-20">
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">Dc Comics</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    {
                                        linksMain.map((link) => {
                                            return (
                                                <li key={link.id} className={`hover:text-blue-400 ${link.isActive ? 'text-blue-400 font-semibold' : ''}`}>
                                                    <a href="{link.url}">{link.content}</a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">Shop</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    {
                                        linksShop.map((link) => {
                                            return (
                                                <li key={link.id} className={`hover:text-blue-400 ${link.isActive ? 'text-blue-400 font-semibold' : ''}`}>
                                                    <a href="{link.url}">{link.content}</a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">DC</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    {
                                        linksDc.map((link) => {
                                            return (
                                                <li key={link.id} className={`hover:text-blue-400 ${link.isActive ? 'text-blue-400 font-semibold' : ''}`}>
                                                    <a href="{link.url}">{link.content}</a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            {/* navigation box */}
                            <div>
                                <p className="text-white uppercase font-bold">Sites</p>
                                {/* list */}
                                <ul className="text-gray-400 flex sm:flex-col gap-3 sm:gap-1 max-sm:flex-wrap">
                                    {
                                        linksSites.map((link) => {
                                            return (
                                                <li key={link.id} className={`hover:text-blue-400 ${link.isActive ? 'text-blue-400 font-semibold' : ''}`}>
                                                    <a href="{link.url}">{link.content}</a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* logo image */}
                        <figure className="hidden md:inline-block relative xl:w-[60%] z-10 md:max-xl:left-40">
                            <img src="src/assets/imgs/dc-logo-bg.png" alt="DC logo" className="w-full" />
                        </figure>
                    </div>
                </div>

                {/* bottom footer */}
                <div className="bg-gray-800">
                    {/* bottom footer container */}
                    <div className="w-[92%] mx-auto px-4 py-12 flex flex-col sm:flex-row items-center justify-between max-sm:gap-10">
                        {/* button */}
                        <button className="uppercase px-7 py-4 border-4 border-blue-400 text-white font-bold">Signup Now!</button>
                        {/* social box */}
                        <div className="flex flex-col md:flex-row justify-center items-cente gap-3 md:gap-7">
                            <p className="uppercase font-bold text-blue-400">Follow us</p>
                            {/* social icons */}
                            <div className="flex gap-3">
                                {/* fb */}
                                <figure className="w-6 aspect-square">
                                    <img src="src/assets/imgs/footer-facebook.png" alt="fb logo" className="w-full" />
                                </figure>
                                {/* periscope */}
                                <figure className="w-6 aspect-square">
                                    <img src="src/assets/imgs/footer-periscope.png" alt="periscope logo" className="w-full" />
                                </figure>
                                {/* pinterest */}
                                <figure className="w-6 aspect-square">
                                    <img src="src/assets/imgs/footer-pinterest.png" alt="pinterest logo" className="w-full" />
                                </figure>
                                {/* twitter */}
                                <figure className="w-6 aspect-square">
                                    <img src="src/assets/imgs/footer-twitter.png" alt="twitter logo" className="w-full" />
                                </figure>
                                {/* youtube */}
                                <figure className="w-6 aspect-square">
                                    <img src="src/assets/imgs/footer-youtube.png" alt="youtube logo" className="w-full" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}