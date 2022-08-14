import { Fragment } from "react";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ThemeSelector } from "./themeSelector";
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SearchIcon,
  XIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const navitems = [
  {
    name: "PC Hardware",
    href: "#",
    types: [
      {
        name: "Components",
        categories: [
          { name: "Video Cards", href: "#" },
          { name: "Power & Cooling", href: "#" },
          { name: "CPUs", href: "#" },
          { name: "Storage & Memory", href: "#" },
          { name: "Motherboards", href: "#" },
          { name: "Networking", href: "#" },
          { name: "OEMs & Prebuilts", href: "#" },
        ],
      },
      {
        name: "Peripherals",
        categories: [
          { name: "Keyboards & Mice", href: "#" },
          { name: "Displays", href: "#" },
          { name: "AR & VR", href: "#" },
          { name: "Cases", href: "#" },
          { name: "Audio", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Games & Software",
    href: "#",
    types: [
      {
        name: "Games",
        categories: [
          { name: "PCMR", href: "#" },
          { name: "Playstation", href: "#" },
          { name: "Xbox", href: "#" },
          { name: "Nintendo", href: "#" },
          { name: "Retro", href: "#" },
        ],
      },
      {
        name: "OS & Applications",
        categories: [
          { name: "Windows", href: "#" },
          { name: "Linux", href: "#" },
          { name: "Mac OS", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Smart Home",
    href: "#",
    types: [
      {
        name: "Networking & Infrastructure",
        categories: [
          { name: "Networking Gear", href: "#" },
          { name: "Servers", href: "#" },
          { name: "Cameras", href: "#" },
        ],
      },
      {
        name: "IoT Devices",
        categories: [
          { name: "Smart Assistants", href: "#" },
          { name: "Switching & Lighting", href: "#" },
          { name: "Security", href: "#" },
          { name: "Automation", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Mobile",
    href: "#",
    types: [
      {
        name: "Phones & Tablets",
        categories: [
          { name: "Android", href: "#" },
          { name: "iOS", href: "#" },
        ],
      },
      {
        name: "Software",
        categories: [
          { name: "Operating Systems", href: "#" },
          { name: "Applications", href: "#" },
        ],
      },
    ],
  },
];
const company = [
  { id: 0, href: "#", icon: InformationCircleIcon },
  { id: 1, href: "#", icon: InformationCircleIcon },
  { id: 2, href: "#", icon: InformationCircleIcon },
  { id: 3, href: "#", icon: InformationCircleIcon },
  { id: 4, href: "#", icon: InformationCircleIcon },
];
const resources = [
  { id: 0, href: "#", icon: InformationCircleIcon },
  { id: 1, href: "#", icon: InformationCircleIcon },
  { id: 2, href: "#", icon: InformationCircleIcon },
  { id: 3, href: "#", icon: InformationCircleIcon },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="relative border border-b border-l-0 border-r-0 border-t-0 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
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
                  <div className="flex">
                    {/* Current: "dark:bg-neutral-900 dark:text-white", Default: "text-gray-300 dark:hover:bg-neutral-700 hover:dark:text-white" */}
                    {navitems.map((item) => (
                      <Popover key={item.name} as={Fragment}>
                        {({ open }) => (
                          <>
                            <div className="max-w-7xl mx-auto flex px-2 py-6 sm:px-4">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "text-black dark:text-white"
                                    : "text-gray-900 dark:text-neutral-300",
                                  "group bg-white dark:bg-neutral-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-neutral-500"
                                )}
                              >
                                <span>{item.name}</span>
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "text-gray-600" : "text-gray-400",
                                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                                  )}
                                  aria-hidden="true"
                                />
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 -translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 -translate-y-1"
                            >
                              <Popover.Panel className="absolute top-full left-0 right-0 z-10 transform shadow-lg">
                                <div
                                  className="absolute flex"
                                  aria-hidden="true"
                                >
                                  <div className="bg-white w-1/2" />
                                  <div className="bg-gray-50 w-1/2" />
                                </div>
                                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                                  <nav
                                    className="grid gap-y-10 px-4 py-8 bg-white dark:bg-neutral-800 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                                    aria-labelledby="solutions-heading"
                                  >
                                    <h2
                                      id="solutions-heading"
                                      className="sr-only"
                                    >
                                      {item.name} menu
                                    </h2>
                                    {item.types.map((type) => (
                                      <div key={type.name}>
                                        <h3 className=" text-sm font-medium text-gray-700 dark:text-neutral-300">
                                          {type.name}
                                        </h3>
                                        <ul
                                          role="list"
                                          className="mt-5 space-y-6"
                                        >
                                          {type.categories.map((category) => (
                                            <li
                                              key={category.name}
                                              className="flow-root"
                                            >
                                              <a
                                                href={category.href}
                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-700 transition ease-in-out duration-150"
                                              >
                                                <p className="text-black dark:text-white">
                                                  {category.name}
                                                </p>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </nav>
                                  <div className="bg-gray-50 dark:bg-neutral-700 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                    <div className="animate-pulse">
                                      <h3 className="text-gray-400 rounded-full w-48 mb-4">
                                        Related Blog Posts
                                      </h3>
                                      <ul
                                        role="list"
                                        className="mt-6 space-y-6"
                                      >
                                        {blogPosts.map((post) => (
                                          <li
                                            key={post.id}
                                            className="flow-root"
                                          >
                                            <a
                                              href={post.href}
                                              className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition ease-in-out duration-150"
                                            >
                                              <div className="hidden sm:block flex-shrink-0">
                                                <svg
                                                  className="w-12 h-12 text-gray-400 dark:text-neutral-500"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  fill="currentColor"
                                                  viewBox="0 0 640 512"
                                                >
                                                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                                                </svg>
                                                {/* <img
                                                  className="w-32 h-20 object-cover rounded-md"
                                                  src={post.imageUrl}
                                                  alt=""
                                                /> */}
                                              </div>
                                              <div className="min-w-0 flex-1 sm:ml-8">
                                                <h4 className="h-2.5 bg-gray-400 rounded-full dark:bg-neutral-500 w-48 mb-4"></h4>
                                                <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[480px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 mb-2.5"></div>
                                                <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[440px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[460px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[360px]"></div>
                                              </div>
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="mt-6 text-sm font-medium animate-pulse">
                                      <a
                                        href="#"
                                        className="h-4 text-gray-400 rounded-full dark:text-amber-500 max-w-[60px]"
                                      >
                                        View All Posts
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
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
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-neutral-50 dark:bg-neutral-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-neutral-100 dark:focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Sitewide Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <ThemeSelector className="relative z-10" />
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                {/* <ThemeSelector className="relative z-10" /> */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:dark:text-white dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

          {/* Mobile menu, show/hide based on menu open state */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "dark:bg-neutral-900 dark:text-white", Default: "text-gray-300 dark:hover:bg-neutral-700 hover:dark:text-white" */}
              {navitems.map((item) => (
                <Disclosure.Button key={item.name} as={Fragment}>
                  <Popover key={item.name} as={Fragment}>
                    {({ open }) => (
                      <>
                        <div className="max-w-7xl mx-auto flex px-2 py-2 sm:px-4">
                          <Popover.Button
                            className={classNames(
                              open
                                ? "text-black dark:text-white"
                                : "text-gray-900 dark:text-neutral-300",
                              "group bg-white dark:bg-neutral-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-neutral-500"
                            )}
                          >
                            <span>{item.name}</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="absolute top-full left-0 right-0 z-10 transform shadow-lg">
                            <div className="absolute flex" aria-hidden="true">
                              <div className="bg-white w-1/2" />
                              <div className="bg-gray-50 w-1/2" />
                            </div>
                            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                              <nav
                                className="grid gap-y-10 px-4 py-8 bg-white dark:bg-neutral-800 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                                aria-labelledby="solutions-heading"
                              >
                                <h2 id="solutions-heading" className="sr-only">
                                  {item.name} menu
                                </h2>
                                {item.types.map((type) => (
                                  <div key={type.name}>
                                    <h3 className=" text-sm font-medium text-gray-700 dark:text-neutral-300">
                                      {type.name}
                                    </h3>
                                    <ul role="list" className="mt-5 space-y-6">
                                      {type.categories.map((category) => (
                                        <li
                                          key={category.name}
                                          className="flow-root"
                                        >
                                          <a
                                            href={category.href}
                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-700 transition ease-in-out duration-150"
                                          >
                                            <p className="text-black dark:text-white">
                                              {category.name}
                                            </p>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </nav>
                              <div className="bg-gray-50 dark:bg-neutral-700 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                <div className="animate-pulse">
                                  <h3 className="text-gray-400 rounded-full w-48 mb-4">
                                    Related Blog Posts
                                  </h3>
                                  <ul role="list" className="mt-6 space-y-6">
                                    {blogPosts.map((post) => (
                                      <li key={post.id} className="flow-root">
                                        <a
                                          href={post.href}
                                          className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition ease-in-out duration-150"
                                        >
                                          <div className="hidden sm:block flex-shrink-0">
                                            <svg
                                              className="w-12 h-12 text-gray-400 dark:text-neutral-500"
                                              xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true"
                                              fill="currentColor"
                                              viewBox="0 0 640 512"
                                            >
                                              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                                            </svg>
                                            {/* <img
                                                  className="w-32 h-20 object-cover rounded-md"
                                                  src={post.imageUrl}
                                                  alt=""
                                                /> */}
                                          </div>
                                          <div className="min-w-0 flex-1 sm:ml-8">
                                            <h4 className="h-2.5 bg-gray-400 rounded-full dark:bg-neutral-500 w-48 mb-4"></h4>
                                            <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[480px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 mb-2.5"></div>
                                            <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[440px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[460px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-400 rounded-full dark:bg-neutral-500 max-w-[360px]"></div>
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-6 text-sm font-medium animate-pulse">
                                  <a
                                    href="#"
                                    className="h-4 text-gray-400 rounded-full dark:text-amber-500 max-w-[60px]"
                                  >
                                    View All Posts
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
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
