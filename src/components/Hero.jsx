import bg from '../assets/bg.jpg'

export default function Hero() {
  return (
    <section id="home"
      className="h-screen relative flex justify-center md:justify-end"
    >
      <div className="absolute inset-0 animate-fadeIn" style={{ backgroundImage: `url(${bg})`,
        backgroundPosition: "right",
      backgroundSize: "120%",      // zoom effect 
    }}></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center md:text-right flex flex-col justify-center px-4 md:px-8 lg:px-16 xl:pr-60 animate-fadeIn">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#D2C1B6]">
          Front-End <br/>Web Developer
        </h1>

        <p className="mt-4 text-center font-semibold text-2xl sm:text-4xl text-[#D2C1B6]">
          Mohammed Aayyan
        </p>

      </div>
    </section>
  )
}
