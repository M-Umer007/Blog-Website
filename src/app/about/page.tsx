export default function About() {
    return (
      <div className="min-h-screen w-full px-6 py-12 md:px-16 lg:px-24 flex flex-col items-center">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            I'm a passionate developer, constantly learning, building, and striving to create solutions that make a difference.
          </p>
        </header>
  
        {/* Bio Section */}
        <section className="p-6 border rounded-lg shadow-md max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Hi! I'm Muhammad-Umer, a self-taught developer specializing in web technologies like HTML, CSS, TypeScript, and Next.js. 
            I thrive on creating user-centric applications and constantly pushing the boundaries of what I can achieve.
          </p>
        </section>
  
        {/* Mission Section */}
        <section className="mt-12 p-6 border rounded-lg shadow-md max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-4">My Mission</h2>
          <p className="text-base md:text-lg leading-relaxed">
            My goal is to craft digital experiences that are efficient, elegant, and impactful, helping users solve their real-world problems through innovation.
          </p>
        </section>
  
        {/* Social Links Section */}
        <section className="mt-16 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Connect With Me</h2>
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/M-Umer007" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-medium underline"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-umer-5047322ba/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-medium underline"
            >
              LinkedIn
            </a>
            {/* <a 
              href="https://twitter.com/YourUsername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-medium underline"
            >
              Twitter
            </a> */}
          </div>
        </section>
      </div>
    );
  }
  