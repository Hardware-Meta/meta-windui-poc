import { Fragment } from "react";
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import {
  MenuIcon,
  XIcon,
  BriefcaseIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const navitems = [
  {
    name: "PC Hardware",
    href: "#",
    icon: null,
    types: [
      {
        name: "components",
        categories: [
          { name: "Video Cards", href: "#", icon: InformationCircleIcon },
          { name: "Cases", href: "#", icon: OfficeBuildingIcon },
          { name: "CPUs", href: "#", icon: NewspaperIcon },
          { name: "Power Supplies", href: "#", icon: BriefcaseIcon },
          { name: "Storage & Memory", href: "#", icon: ShieldCheckIcon },
        ],
      },
      {
        name: "peripherals",
        categories: [
          { name: "Mice & Keyboards", href: "#", icon: InformationCircleIcon },
          { name: "Displays", href: "#", icon: OfficeBuildingIcon },
          { name: "Networking", href: "#", icon: NewspaperIcon },
          { name: "Smart Home", href: "#", icon: BriefcaseIcon },
        ],
      },
    ],
  },
  { name: "Software", href: "#", icon: null },
  { name: "Mobile", href: "#", icon: null },
  { name: "Smart Home", href: "#", icon: null },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-neutral-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://hwmeta.com/wp-content/themes/hwmeta/img/logotxtside.png"
                    alt="Hardware Meta"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://hwmeta.com/wp-content/themes/hwmeta/img/logotxtside.png"
                    alt="Hrdware Meta"
                  />
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-neutral-900 text-white", Default: "text-gray-300 hover:bg-neutral-700 hover:text-white" */}
                    {navitems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="hover:bg-neutral-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Site Wide Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-neutral-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Sitewide Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-neutral-900 text-white", Default: "text-gray-300 hover:bg-neutral-700 hover:text-white" */}
              {navitems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="hover:bg-neutral-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
