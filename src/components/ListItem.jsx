

export default function ListItem (props) {

    const item = props.item;

    return (

        <>
            <li className="flex items-center sm:justify-center gap-3">
                {/* icon */}
                <figure className="w-10 aspect-square">
                    <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                </figure>
                {/* label */}
                <p>{item.label}</p>
            </li>
        </>

    );

}