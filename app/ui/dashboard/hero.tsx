import Image from "next/image";
import StarRating from "./starts";
import { cars } from "@/app/constants";

const Hero = () => {
  
  return (
    <div className="flex flex-col items-center justify-center md:h-screen">
      <div className="grid place-items-center border-l border-r border-1">
        <ul className="md:grid hidden grid-cols-5 bg-gray-100 w-full py-2 items-center border-b h-[50px]">
          <li className=" text-gray-500 font-semibold ml-10">CAR</li>
          <li className="text-gray-500 font-semibold">NEXT RESERVATION</li>
          <li className="text-gray-500 font-semibold">STATUS</li>
          <li className="text-gray-500 font-semibold">RATING</li>
          <li className="text-gray-500 font-semibold">ACTIONS</li>
        </ul>
        <ul className="w-full ">
          {cars.map((car, index) => (
            <div
              key={car.name}
              className={`md:grid flex justify-start grid-cols-5 items-center flex-col p-2 mt-2 ${
                index < cars.length - 0 ? 'border-b' : ''
              }`}
            >
              <div className="md:flex items-center gap-1 flex ">
                <Image src={car.img} alt={car.name} width={100} height={100}/>
                <li className="col-span-1">{car.name}</li>
              </div>
              <li className="col-span-1 ml-8 font-light text-gray-400">{car.nextReservation}</li>
              <li className="col-span-1 rounded bg-green-200 w-24 justify-center flex  text-green-700">{car.status}</li>
              <li className="col-span-1">
                  <StarRating rating={car.rating}/>
              </li>
              <li className="col-span-1">
                <Image
                  alt=""
                  className="ml-7 cursor-pointer"
                  width={30}
                  height={30}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO3TMQqAMBBE0V/N1Y33dOMxFCGVprDZtXAepEkzEPLB7EnACnQggDbu0jXguJ3rLl2fDO8VwzEZ3r566qViWGM8qj/X/8gd446TyB1XkTvGHSeROzZeOAGWFFJap6wQ3wAAAABJRU5ErkJggg=="
                />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
