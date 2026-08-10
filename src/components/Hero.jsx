function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-28 md:px-10"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Top information */}
      <div className="relative z-20 flex justify-between items-start mb-12 max-w-7xl mx-auto">

        {/* Top Left */}
        <div className="hero-location">
          <div className="flex items-start gap-3">

            <span className="text-pink-500 text-xl mt-0.5">
              ●
            </span>

            <div>
              <p className="font-bold tracking-wide text-sm md:text-base">
                BASED IN TELANGANA,
              </p>

              <p className="text-gray-400 font-semibold text-sm md:text-base">
                INDIA
              </p>
            </div>

          </div>
        </div>

        {/* Top Right */}
        <div className="text-right hero-role">

          <p className="font-bold text-sm md:text-base">
            JAVA FULL STACK DEVELOPER
          </p>

          <p className="text-gray-500 text-sm md:text-base mt-1">
            TECH DEVELOPER
          </p>

        </div>

      </div>


      {/* Main Hero */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(350px,1fr)_260px] gap-10 lg:gap-16 items-center">


          {/* =========================
              LEFT CARD
          ========================== */}

          <div className="hero-left order-2 lg:order-1">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500">

              <p className="text-gray-500 text-xs tracking-[0.35em] mb-5">
                PROFILE
              </p>

              <h2 className="text-3xl font-black leading-tight">
                Mohammad
                <br />

                <span className="text-gray-400">
                  Feroz
                </span>
              </h2>

              <div className="mt-8 space-y-6">

                <div>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Age
                  </p>

                  <p className="text-lg font-bold">
                    23 years old
                  </p>

                </div>


                <div>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Location
                  </p>

                  <p className="text-lg font-bold">
                    Telangana, India
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              CENTER PHOTO
          ========================== */}

          <div className="order-1 lg:order-2 flex flex-col items-center">

            <div className="relative hero-photo">

              {/* Large glow */}
              <div className="absolute -inset-16 bg-blue-600/20 rounded-full blur-[90px]" />

              {/* Rotating ring */}
              <div className="absolute -inset-7 rounded-full border border-blue-500/20 hero-ring" />

              {/* Second ring */}
              <div className="absolute -inset-3 rounded-full border border-white/10" />


              {/* Photo */}
              <div className="relative w-64 h-[360px] sm:w-72 sm:h-[400px] md:w-80 md:h-[450px] overflow-hidden rounded-[45%] border border-white/20 bg-gray-900 shadow-2xl">

                <img
                  src="/profile.jpg"
                  alt="Mohammad Feroz"
                  className="w-full h-full object-cover object-center"
                />

                {/* Photo overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              </div>

            </div>


            {/* Name */}
            <div className="text-center mt-10 hero-name">

              <p className="text-blue-400 text-xs md:text-sm tracking-[0.45em] uppercase mb-3">
                JAVA FULL STACK DEVELOPER
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">

                Mohammad{" "}

                <span className="text-gray-400">
                  Feroz
                </span>

              </h1>

            </div>

          </div>


          {/* =========================
              RIGHT CARD
          ========================== */}

          <div className="hero-right order-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500">

              <p className="text-gray-500 text-xs tracking-[0.35em] mb-5">
                CURRENTLY
              </p>

              <h2 className="text-4xl font-black">
                BUILDING
              </h2>

              <p className="text-gray-400 leading-7 mt-5">
                Modern web applications and real-world software
                experiences.
              </p>


              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-7">

                <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
                  Java
                </span>

                <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
                  React
                </span>

                <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
                  SQL
                </span>

              </div>


              {/* =========================
                  RESUME BUTTON
              ========================== */}

              <a
                href="/resume.pdf"
                download
                className="group mt-8 flex items-center justify-center gap-3 w-full border border-blue-500/40 bg-blue-500/10 hover:bg-blue-600 hover:border-blue-500 px-5 py-3 rounded-xl text-blue-400 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1"
              >

                <span>
                  Download Resume
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex justify-center mt-14">

        <div className="flex flex-col items-center gap-2 text-gray-600">

          <span className="text-[10px] tracking-[0.4em] uppercase">
            Scroll
          </span>

          <span className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />

        </div>

      </div>

    </section>
  );
}

export default Hero;