import React from 'react';
import Container from './Container';
const Navbar = () => {
    return (
        <div className="bg-white  shadow-md border-b-[0.5px] border-gray-300">
            <Container>
                <nav className=" px-8 py-4 flex flex-col md:flex-row justify-between items-center">
                    <h1 className="sm:text-[16px] md:text-xl  font-bold">CS — Ticket System</h1>
                    <div className="flex  items-center gap-2.5 md:gap-5">
                        <a href="#" className="text-gray-600">
                            Home
                        </a>
                        <a href="#" className="text-gray-600">
                            FAQ
                        </a>
                        <a href="#" className="text-gray-600">
                            Changelog
                        </a>

                        <a href="#" className="text-gray-600">
                            Blog
                        </a>
                        <a href="#" className="text-gray-600">
                            Download
                        </a>
                        <a href="#" className="text-gray-600">
                            Contact
                        </a>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                            + New Ticket
                        </button>
                        <button></button>
                    </div>
                    <div className="block md:hidden">

                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;