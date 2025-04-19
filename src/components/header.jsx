export default function Navbar() {
    return (
        <section class="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] lg:h-[910px] flex items-center justify-center">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-green-400">Kami peduli hari ini, demi kesehatan esok hari</h1>
                <p class="mb-8 text-lg font-normal text-white-900 lg:text-xl sm:px-16 lg:px-48 dark:text-green-400">
                KalkuFit berkomitmen menggabungkan kesehatan, inovasi, dan kepedulian untuk mewujudkan masa depan yang lebih sehat bagi setiap individu.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#kalkulator" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-emerald-800 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-emerald-900 dark:text-emerald-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-emerald-700">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    )
}