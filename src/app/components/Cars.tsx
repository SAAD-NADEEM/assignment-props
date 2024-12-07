import Car from "./Car";
import { CarsProps } from "./types";


function Cars({cars}:CarsProps) {
    return (
        <section className="flex flex-col lg:flex-row gap-5 h-auto">
            {cars.map((car, index) => (
                <Car img={car.img} carName={car.carName} carPrice={car.carPrice} Reviews={car.Reviews}/>
            ))}
        </section>
    )
}

export default Cars;
