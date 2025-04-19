export default function Tentang() {
    return (
        <section class="bg-green-400 rounded-4xl m-15">
            <div class="py-8 px-4 mx-auto md:max-w-screen-xl sm:max-w-screen-sm text-left lg:py-16">
                <div class="grid grid-cols-1 lg:grid lg:grid-cols-2 justify-between lg:gap-12">
                    <div class="text-information ">
                        <h1 class="text-5xl font-extrabold tracking-tight leading-none text-white mb-8 md:text-5xl lg:text-6xl text-left">Mengenal KalkuFit</h1>
                        <p className="mb-8 text-xl font-normal text-left text-gray-100 lg:text-xl">
                            KalkuFit adalah platform kesehatan berbasis website yang membantu pengguna memantau asupan kalori harian mereka. Dengan fitur seperti kalkulator kalori, informasi gizi, dan tips kesehatan, KalkuFit memudahkan orang untuk menjaga pola makan seimbang dan mendorong gaya hidup sehat secara berkelanjutan.                            </p>
                    </div>
                    <div class="image-information flex justify-center items-center">
                        <img src="/Tentang.jpg" class="rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
