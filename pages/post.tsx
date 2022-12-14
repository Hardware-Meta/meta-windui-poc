import type { SVGProps } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";

const social = [
  {
    name: "Facebook",
    href: "#",
    text: "/SonuchiSan",
    icon: (props: SVGProps<any>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    text: "@Sonuchi",
    icon: (props: SVGProps<any>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Youtube",
    href: "#",
    text: "/SonuchiPlays",
    icon: (props: SVGProps<any>) => (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const crumbs = [
  { name: "Category", href: "/", current: false },
  { name: "Post", href: "#", current: true },
];

const PostPage = () => {
  return (
    <>
      {/* Featured Image */}
      <div className="flex justify-center items-center aspect-[16/9] bg-gray-300 rounded dark:bg-neutral-700 z-0">
        <svg
          className="w-32 h-32 text-gray-200 dark:text-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      {/* End Featured Image */}
      {/* Bread Crumbs */}
      <nav
        className="flex max-w-7xl mx-auto px-4 py-8 xl:-mt-60 bg-white dark:bg-neutral-800 xl:rounded-t xl:shadow"
        aria-label="Breadcrumb"
      >
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <Link href="/">
                <a className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </a>
              </Link>
            </div>
          </li>
          {crumbs.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link href={page.href}>
                  <a
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      {/* End Bread Crumbs */}

      <main className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-4 bg-white dark:bg-neutral-800 xl:shadow mb-10 z-10">
        <article className="flex-grow">
          <div role="status" className="space-y-2.5">
            <div className="flex items-center space-x-2 w-full">
              <div className="h-5 mb-3 rounded-full bg-amber-500 w-96"></div>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>

          <div role="status" className="space-y-2.5 mt-10">
            <div className="flex items-center space-x-2 w-full">
              <div className="h-3 mb-2 rounded-full bg-amber-500 w-96"></div>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div className="grid gap-2 lg:grid-cols-6 mt-8">
            <div
              role="status"
              className="flex justify-center items-center w-full bg-gray-300 rounded-lg animate-pulse dark:bg-neutral-700 aspect-video lg:col-span-3"
            >
              <svg
                className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="flex justify-center items-center w-full bg-gray-300 rounded-lg animate-pulse dark:bg-neutral-700 aspect-video lg:col-span-3"
            >
              <svg
                className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="flex justify-center items-center w-full bg-gray-300 rounded-lg animate-pulse dark:bg-neutral-700 aspect-video lg:col-span-2"
            >
              <svg
                className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="flex justify-center items-center w-full bg-gray-300 rounded-lg animate-pulse dark:bg-neutral-700 aspect-video lg:col-span-2"
            >
              <svg
                className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="flex justify-center items-center w-full bg-gray-300 rounded-lg animate-pulse dark:bg-neutral-700 aspect-video lg:col-span-2"
            >
              <svg
                className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div role="status" className="space-y-2.5 mt-10">
            <div className="flex items-center space-x-2 w-full">
              <div className="h-3 mb-2 rounded-full bg-amber-500 w-96"></div>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>

          <div role="status" className="space-y-2.5 mt-8">
            <div className="flex items-center space-x-2 w-full">
              <div className="h-3 mb-2 rounded-full bg-amber-500 w-96"></div>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </article>

        <aside className="order-first md:order-last flex flex-col lg:max-w-[400px]">
          {/* Post Author */}
          <div role="status" className="flex flex-col mb-4">
            <div className="w-full h-2 mb-4 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
            <div className="flex flex-wrap space-y-3 animate-pulse justify-center md:items-center">
              <div className="flex justify-end items-center max-w-24 max-h-24 rounded">
                <svg
                  className="w-24 h-24 text-gray-200 dark:text-neutral-600 border-4 border-neutral-600 rounded-full"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center w-full mb-3.5">
                  <div className="h-3 rounded-full bg-amber-500 w-32 mr-2"></div>
                  <div className="h-3 rounded-full bg-amber-600 w-24"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
              </div>
              <div className="mt-8 basis-full flex flex-wrap justify-center">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-gray-500 hover:text-gray-900 dark:text-neutral-500 dark:hover:text-neutral-100"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                    <span className="ml-2 mr-4 text-sm">{item.text}</span>
                  </a>
                ))}
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            {/* <div className="w-full h-2 mt-4 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" /> */}
          </div>
          {/* End Post Author */}
          {/* Post Additional Content */}
          <div className="relative mb-2">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full h-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
            </div>
            <div className="relative flex justify-start px-20">
              <span className="bg-white dark:bg-neutral-800">
                <span className="px-2 font-bold text-2xl text-transparent bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text">
                  Supplmental
                </span>
              </span>
            </div>
          </div>
          <div
            role="status"
            className="flex justify-center items-center w-full bg-gray-300 rounded-lg animate-pulse dark:bg-neutral-700 aspect-video"
          >
            <svg
              className="w-12 h-12 text-gray-200 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 384 512"
            >
              <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          {/* Post Additional Content */}
          {/* Post Meta */}
          <div className="relative mb-2 hidden md:block">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full h-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
            </div>
            <div className="relative flex justify-start px-20">
              <span className="bg-white dark:bg-neutral-800">
                <span className="px-2 font-bold text-2xl text-transparent bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text">
                  TL;DR
                </span>
              </span>
            </div>
          </div>
          <div
            role="status"
            className="p-4 max-w-full rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-neutral-700 mb-2 hidden md:block"
          >
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32 mb-2.5"></div>
            <div className="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
            <div className="flex items-baseline mt-4 space-x-6">
              <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-neutral-700"></div>
              <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-neutral-700"></div>
              <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-neutral-700"></div>
              <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-neutral-700"></div>
              <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-neutral-700"></div>
              <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-neutral-700"></div>
              <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-neutral-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          {/* End Post Meta  */}
          <div
            role="status"
            className="hidden md:block p-4 space-y-4 w-full rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-neutral-700"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-700 w-12"></div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-700 w-12"></div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-700 w-12"></div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-700 w-12"></div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </aside>
      </main>
    </>
  );
};

export default PostPage;
