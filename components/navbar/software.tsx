/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
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
} from "@heroicons/react/outline";

const games = [
  { name: "PCMR", href: "#", icon: InformationCircleIcon },
  { name: "Playstation", href: "#", icon: OfficeBuildingIcon },
  { name: "Xbox", href: "#", icon: NewspaperIcon },
  { name: "Nintento", href: "#", icon: BriefcaseIcon },
  { name: "Retro", href: "#", icon: ShieldCheckIcon },
];

const other = [
  { name: "Operating Systems", href: "#", icon: InformationCircleIcon },
  { name: "Applications", href: "#", icon: OfficeBuildingIcon },
];

const blogPosts = [
  {
    id: 1,
    name: "Sapphire Nitro+ RX 5700XT: Dreaming in 1440p",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://cdn.hwmeta.com/wp-content/uploads/2020/03/10101739/5700xt-02.jpg",
  },
  {
    id: 2,
    name: "The Q58 by Lian Li – Small Size BIG POWAH",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://cdn.hwmeta.com/wp-content/uploads/2021/11/10100927/q58-side-b-shot-scaled.jpeg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SoftwareNav = () => {
  return (
    <Popover className="z-0 relative m-5">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span>Software</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute left-0 right-0 z-10 inset-x-0 transform shadow-lg w-[90vw]">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-white w-1/2" />
                <div className="bg-gray-50 w-1/2" />
              </div>
              <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <nav
                  className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                  aria-labelledby="solutions-heading"
                >
                  <h2 id="solutions-heading" className="sr-only">
                    Components
                  </h2>
                  <div>
                    <h3 className="text-base font-medium text-gray-500">
                      Games
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {games.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-500">
                      Operating Systems & Applications
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {other.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
                <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12 hidden sm:inline-block">
                  <div>
                    <h3 className="text-base font-medium text-gray-500">
                      Recommended Reading
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {blogPosts.map((post) => (
                        <li key={post.id} className="flow-root">
                          <a
                            href={post.href}
                            className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                          >
                            <div className="hidden sm:block flex-shrink-0">
                              <img
                                className="w-32 h-20 object-cover rounded-md"
                                src={post.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1 sm:ml-8">
                              <h4 className="text-base font-medium text-gray-900 truncate">
                                {post.name}
                              </h4>
                              <p className="mt-1 text-sm text-gray-500">
                                {post.preview}
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                    >
                      View all posts <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default SoftwareNav;
