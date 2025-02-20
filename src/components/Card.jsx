

export default function Card (props) {

    const card = props.cardData;

    return (

        <>
            {/* card */}
            <div>
                {/* card img */}
                <figure className="w-full">
                    <img src={card.thumb} alt={card.title} className="w-full" />
                </figure>
                {/* card title */}
                <p>{card.title}</p>
            </div>
        </>

    );

}