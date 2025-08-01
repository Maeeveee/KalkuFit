export default function Navbar() {
    return (
        <section class="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] h-[100vh] lg:h-[910px] flex items-center justify-center">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-green-400">Kami peduli hari ini, demi kesehatan esok hari</h1>
                <p class="mb-8 text-lg font-normal text-white-900 lg:text-xl sm:px-16 lg:px-48 dark:text-green-400">
                KalkuFit berkomitmen menggabungkan kesehatan, inovasi, dan kepedulian untuk mewujudkan masa depan yang lebih sehat bagi setiap individu.</p>
                <div class="grid grid-cols-2 lg:grid-cols-2 lg:w-[30%] lg:mx-auto gap-4">
                    <a href="#kalkulator" class="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300">
                        Get started
                        <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-green-800 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 hover:text-green-700 focus:ring-4 focus:ring-gray-200">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    )
}