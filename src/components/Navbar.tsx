import logo from "../asset/logoImg.png";
import mlogo from "../asset/mlogo.png";
import { useState } from "react";
import {
    CircleAlert,
    HandCoins,
    House,
    Menu,
    MessagesSquare,
    Tag,
    X,
} from "lucide-react";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const [active, setActive] = useState("Home");

    const links = [
        { name: "Home", icon: <House />, href: "/" },
        { name: "About Us", icon: <CircleAlert />, href: "/" },
        { name: "Our Services", icon: <HandCoins />, href: "/" },
        { name: "Pricing", icon: <Tag />, href: "/" },
        { name: "FAQ", icon: <MessagesSquare />, href: "/" },
    ];

    return (
        <nav className="flex justify-between items-center py-2 md:px-24 px-4 md:bg-white relative">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="md:w-72 w-32" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex justify-between items-center gap-10">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`${
                            active === link.name ? "text-red-600 font-semibold" : "text-black"
                        } hover:text-red-700 transition`}
                        onClick={() => setActive(link.name)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:flex">
                <button className="bg-red-600 text-white px-4 py-2 rounded-3xl shadow-md text-xl font-sans hover:bg-red-700 transition">
                    Get A Quote
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button onClick={() => setOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={` md:hidden fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-red-100 shadow-lg transform transition-transform duration-500 ease-in-out z-50 flex flex-col items-start gap-6 p-6 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="w-full flex justify-between items-center">
                    <img src={mlogo} alt="logo" className="w-32" />
                    <button onClick={() => setOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                {/* Mobile Links */}
                <div className="mt-10 flex flex-col gap-6 text-lg font-medium w-full">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                                setOpen(false);
                                setActive(link.name);
                            }}
                            className={`flex gap-3 items-center transition ${
                                active === link.name
                                    ? "text-red-600 font-semibold"
                                    : "text-black"
                            }`}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    ))}

                    <button className="bg-red-600 text-white px-5 py-2 rounded-3xl shadow-md text-lg font-sans hover:bg-red-700 transition w-full">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
}
