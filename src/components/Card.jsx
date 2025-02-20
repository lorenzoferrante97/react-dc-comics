

export default function Card (props) {

    const card = props.cardData;

    return (

        <>
            {/* card */}
            <div className="flex flex-col gap-4 items-center">
                {/* card img */}
                <figure className="w-full aspect-square overflow-hidden">
                    <img src={card.thumb} alt={card.title} className="w-full object-cover" />
                </figure>
                {/* card title */}
                <p className="font-bold uppercase">{card.title}</p>
            </div>
        </>

    );

}