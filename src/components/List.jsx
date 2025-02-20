

import ListItem from "./listItem";

const arrayListItems = [
    {
        id: 1,
        icon: "src/assets/imgs/buy-comics-digital-comics.png",
        label: "Digital Comics"
    },
    {
        id: 2,
        icon: "src/assets/imgs/buy-comics-merchandise.png",
        label: "DC Merchandise"
    },
    {
        id: 3,
        icon: "src/assets/imgs/buy-comics-subscriptions.png",
        label: "Subscription"
    },
    {
        id: 4,
        icon: "src/assets/imgs/buy-comics-shop-locator.png",
        label: "Comic Shop Locator"
    },
    {
        id: 5,
        icon: "src/assets/imgs/buy-dc-power-visa.svg",
        label: "DC Power Visa"
    },
]


export default function List () {

    return (
        <>
            <ul className="w-full flex flex-col sm:flex-row gap-10 justify-center flex-wrap lg:justify-between items-center">
                {
                    arrayListItems.map( (item) => {
                        return (
                            <ListItem key={item.id} item={item} />
                        );
                    } )
                }
            </ul>
        </>

    );

}