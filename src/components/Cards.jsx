import comics from "../data/comics";
import Card from "./Card";

export default function Cards () {

    return (

        <>
            {/* cards container */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-5">
                {
                    comics.map( (card) => {

                        return (
                            <Card key={card.id} cardData={card} />
                        )
                    } )
                }
            </div>
        </>

    );

}