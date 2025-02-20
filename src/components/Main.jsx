

import Cards from "./Cards";

// main component function

export default function Main() {

    return (
        <>
            <main className="flex justify-center items-center w-full bg-black text-white p-10">
                {/* main container */}
                <div className="max-w-[80%] min-h-40 flex justify-center items-center">
                    <Cards />
                </div>
            </main>
        </>
    );
}