import comics from "../data/comics";
import Card from "./Card";

export default function Cards () {

    return (

        <>
            {/* cards container */}
            <div>
            {
                comics.map( (card) => {
                    <Card key={card.id} card={card} />
                } )
            }
            </div>
        </>

    );

}