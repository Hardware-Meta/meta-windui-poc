import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const featuredPosts = [
  { id: 0, name: "Post One", description: "This is the first post" },
  { id: 1, name: "Post Two", description: "This is the second post" },
  { id: 2, name: "Post Three", description: "This is the third post" },
  { id: 3, name: "Post Four", description: "This is the fourth post" },
  { id: 4, name: "Post Five", description: "This is the fifth post" },
];

const categoryPosts = [
  { id: 0, name: "Post One", description: "This is the first post" },
  { id: 1, name: "Post Two", description: "This is the second post" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is the home page" />
      </Head>
      <main className="max-w-7xl mx-auto px-2 lg:px-0">
        {/* Featured Posts */}
        <div className="my-2 grid gap-2 md:grid-cols-2 lg:grid-cols-6">
          {featuredPosts.map((post) => (
            <div
              key={post.name}
              role="status"
              className={classNames(
                post.id < 2 ? "lg:col-span-3" : "lg:col-span-2",
                "p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-neutral-700"
              )}
            >
              <Link as="a" href="/post">
                <>
                  <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-neutral-700">
                    <svg
                      className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                  <div className="flex items-center mt-4 space-x-3">
                    <svg
                      className="w-14 h-14 text-gray-200 dark:text-neutral-700"
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
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                    </div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </>
              </Link>
            </div>
          ))}
        </div>
        {/* End Featured Posts */}

        <div className="my-2 grid gap-2 lg:grid-cols-3">
          {/* Posts by Catigory*/}
          <div className="lg:col-span-2 grid">
            {/* Category 1 */}
            <div className="">
              <div className="relative mb-2">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full h-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
                </div>
                <div className="relative flex justify-start px-20">
                  <span className="bg-white dark:bg-neutral-800">
                    <span className="px-2 font-bold text-2xl text-amber-600">
                      Posts By Category
                    </span>
                  </span>
                </div>
              </div>
              {/* end makeshift gradient divider */}

              <div className="mb-2 grid gap-2 lg:grid-cols-2">
                {categoryPosts.map((post) => (
                  <div
                    key={post.name}
                    role="status"
                    className="lg:grid-cols-2 p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-neutral-700"
                  >
                    <Link as="a" href="/post">
                      <>
                        <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-neutral-700">
                          <svg
                            className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 640 512"
                          >
                            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                          </svg>
                        </div>
                        <div className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                        <div className="flex items-center mt-4 space-x-3">
                          <svg
                            className="w-14 h-14 text-gray-200 dark:text-neutral-700"
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
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                          </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* End Category 1 */}

            {/* Category 2 */}
            <div className="">
              <div className="relative mb-2">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full h-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
                </div>
                <div className="relative flex justify-start px-20">
                  <span className="bg-white dark:bg-neutral-800">
                    <span className="px-2 font-bold text-2xl text-amber-600">
                      Posts By Category
                    </span>
                  </span>
                </div>
              </div>
              {/* end makeshift gradient divider */}

              <div className="mb-2 grid gap-2 lg:grid-cols-2">
                {categoryPosts.map((post) => (
                  <div
                    key={post.name}
                    role="status"
                    className="lg:grid-cols-2 p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-neutral-700"
                  >
                    <Link as="a" href="/post">
                      <>
                        <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-neutral-700">
                          <svg
                            className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 640 512"
                          >
                            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                          </svg>
                        </div>
                        <div className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                        <div className="flex items-center mt-4 space-x-3">
                          <svg
                            className="w-14 h-14 text-gray-200 dark:text-neutral-700"
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
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                          </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* End Category 2 */}

            {/* Category 3 */}
            <div className="">
              <div className="relative mb-2">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full h-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
                </div>
                <div className="relative flex justify-start px-20">
                  <span className="bg-white dark:bg-neutral-800">
                    <span className="px-2 font-bold text-2xl text-amber-600">
                      Posts By Category
                    </span>
                  </span>
                </div>
              </div>
              {/* end makeshift gradient divider */}

              <div className="mb-2 grid gap-2 lg:grid-cols-2">
                {categoryPosts.map((post) => (
                  <div
                    key={post.name}
                    role="status"
                    className="lg:grid-cols-2 p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-neutral-700"
                  >
                    <Link as="a" href="/post">
                      <>
                        <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-neutral-700">
                          <svg
                            className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 640 512"
                          >
                            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                          </svg>
                        </div>
                        <div className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                        <div className="flex items-center mt-4 space-x-3">
                          <svg
                            className="w-14 h-14 text-gray-200 dark:text-neutral-700"
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
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                          </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* End Category 3 */}

            {/* Category 4 */}
            <div className="">
              <div className="relative mb-2">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full h-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
                </div>
                <div className="relative flex justify-start px-20">
                  <span className="bg-white dark:bg-neutral-800">
                    <span className="px-2 font-bold text-2xl text-amber-600">
                      Posts By Category
                    </span>
                  </span>
                </div>
              </div>
              {/* end makeshift gradient divider */}

              <div className="mb-2 grid gap-2 lg:grid-cols-2">
                {categoryPosts.map((post) => (
                  <div
                    key={post.name}
                    role="status"
                    className="lg:grid-cols-2 p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-neutral-700"
                  >
                    <Link as="a" href="/post">
                      <>
                        <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-neutral-700">
                          <svg
                            className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 640 512"
                          >
                            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                          </svg>
                        </div>
                        <div className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                        <div className="flex items-center mt-4 space-x-3">
                          <svg
                            className="w-14 h-14 text-gray-200 dark:text-neutral-700"
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
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                          </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* End Category 4 */}
          </div>
          {/* End Posts by Category */}
          <aside>
            <div className="relative mb-2">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full h-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500" />
              </div>
              <div className="relative flex justify-start px-20">
                <span className="bg-white dark:bg-neutral-800">
                  <span className="px-2 font-bold text-2xl text-amber-600">
                    Twitter
                  </span>
                </span>
              </div>
            </div>
            <div className="shadow rounded border border-gray-200 dark:border-neutral-700">
              {featuredPosts.map((post) => (
                <div
                  key={post.name}
                  role="status"
                  className="p-4 rounded animate-pulse md:p-6"
                >
                  <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-neutral-700">
                    <svg
                      className="w-12 h-12 text-gray-200 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-500  to-purple-500 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Home;
