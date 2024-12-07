import Cars from "./Cars";
import Header from "./Header";
import Nav from "./Nav";
import { CarsProps } from "./types";



function Featured({cars}:CarsProps) {
    return(
        <section className="flex flex-col justify-center items-center my-4 bg-[#f2f3f3] h-auto w-full">
            <Header />
            <Nav />
            <Cars cars={cars}/>
        </section>
    )
}

export default Featured;