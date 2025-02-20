import comics from "../data/comics";
import Card from "./Card";

export default function Cards () {

    return (

        <>
            {/* cards container */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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