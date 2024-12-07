import Featured from "./components/Featured";

function page() {

    const cars =[
        {
            carName: "Toyota Corolla",
            carPrice: "59.7 - 75.5",
            Reviews: 622,
            img: '/car1.jpg'
        },
        {
            carName: "Suzuki Alto",
            carPrice: "23.3 - 30.5",
            Reviews: 202,
            img: '/car2.png'
        },
        {
            carName: "Honda City",
            carPrice: "46.5 - 58.5",
            Reviews: 457,
            img: '/car3.jpg'
        },
        {
            carName: "Honda Civic",
            carPrice: "86.6 - 99.0",
            Reviews: 363,
            img: '/car4.jpg'
        },

    ]

    return (
        <>
            <Featured cars={cars}/>
        </>
    );
};

export default page;