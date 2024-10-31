
import { Navbar } from "flowbite-react";
import image from '../assets/images/ega.png'
export function NavHeader() {
    return (
        <Navbar fluid rounded className='p-4'>
            <img src={image} className="mr-3 h-16 sm:h-9" alt="Flowbite React Logo"/>
            <span className="self-center whitespace-nowrap no-underline text-bgColor text-xl font-semibold dark:text-white">eBusiness Card</span>
            <Navbar.Toggle/>
        </Navbar>
    );
}