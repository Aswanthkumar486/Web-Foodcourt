/* eslint-disable @next/next/no-img-element */
export default function Navbar({ data }) {
  return (
    <nav
  className="navbar navbar-expand-lg navbar-dark fixed-top shadow-lg py-2"
  style={{
    backgroundColor: '#8B0000', // Deep brown-red color
    backdropFilter: 'blur(10px)',
    fontFamily: "'Playfair Display', serif",
    transition: 'all 0.5s ease',
  }}
>

      <div className="container">
        <div className="d-flex align-items-center">
          <div className="position-relative">
            <img
              src={data.logo}
              alt="Logo"
              className="img-fluid"
              style={{
                width: '60px',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '5px',
                transition: 'transform 0.5s ease',
              }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 border border-warning rounded-circle animate__animated animate__pulse animate__infinite"
              style={{
                animationDuration: '3s',
                pointerEvents: 'none',
              }}
            ></div>
          </div>
          <h1
            className="mb-0 ms-3 d-none d-lg-block"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              background: 'linear-gradient(to right, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Food Court
          </h1>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"  
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {data.links.map((link, index) => {
              const sectionId = link.url.replace('#', '');

              return (
                <li key={index} className="nav-item mx-2 h5">
                  <a
                    href={`#${sectionId}`}
                    className="nav-link fs-6 px-3 py-2"
                    style={{ fontWeight: 500 }}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
