
// header component function

export default function Header(props) {

    const links = props.links;

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

                            {
                                links.map((link) => {
                                    return (
                                        <li key={link.id} className={` hover:border-b-4 hover:border-blue-400 hover:text-blue-400 py-2 uppercase font-semibold ${link.isActive ? 'border-b-4 border-blue-400 text-blue-400' : ''}`}><a href="{link.url}">{link.content}</a></li>
                                    );
                                })
                            }

                        </ul>
                    </nav>
                </div>
            </header>
        </>

    );
}