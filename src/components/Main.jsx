

import Cards from "./Cards";
import List from "./list";

// main component function

export default function Main() {

    return (
        <>
            <main className="flex flex-col justify-center items-center w-full bg-black text-white p-10">
                {/* main container */}
                <div className="max-w-[80%] min-h-40 flex justify-center items-center">
                    <Cards />
                </div>
            </main>
            {/* list section */}
            <div className="bg-blue-400 w-full">
                {/* list container */}
                <div className="max-w-[80%] mx-auto min-h-40 flex justify-center items-center text-white font-medium">
                    {/* list with icons */}
                    <List />
                </div>
            </div>
        </>
    );
}