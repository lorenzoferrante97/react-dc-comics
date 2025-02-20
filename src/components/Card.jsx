

export default function Card (props) {

    const { card } = props;

    return (

        <>
            {/* card */}
            <div key={card.id}>
                {/* card img */}
                <figure>
                    <img src="{card.thumb}" alt="{card.title}" />
                </figure>
                {/* card title */}
                <p>{card.title}</p>
            </div>
        </>

    );

}