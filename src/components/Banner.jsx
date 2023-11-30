import Button from "./elements/Button";

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    FEED YOUR TEMPLE
                </h2>
                <p className="font-semibold text-lg text-pink-600 py-2">
                    Best Food in Town since 2012, but dont take my advice, try it yourself!
                </p>
                <p className="font-semibold text-lg text-pink-600 py-2">
                    Get Started Today!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        Check Our The Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={require("../assets/images/bakery_banner.jpg")} alt="banner" className="max-h-40" />
            </div>
        </div>
    )
}