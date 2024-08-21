import "./page.css"
function Project() {
    return (
        <>

            <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                <h1 className="py-3.5 px-0.5 z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Projects </h1>


                <h4 className="py-3.5 px-0.5 z-10 text-base text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
                    <a href="https://jerrammissle.github.io/youtube.github.io/" className="youtube">Youtube Clone</a>
                </h4>
                <h4 className="py-3.5 px-0.5 z-10 text-base text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
                    <a href="https://jerrammissle.github.io/ecommerce.github.io/" className="youtube">Ecommerce Web Page</a>
                </h4>


            </div>

        </>
    );
}
export default Project;