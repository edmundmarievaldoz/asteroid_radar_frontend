import './Home.scss';
import Timer from '../assets/Timer.jsx';

function Home () {
    // Initialisation -----------------------
    // State --------------------------------
    // Handlers -----------------------------
    // Views --------------------------------
    return (
        <>
        <h1>Welcome to the Stellaris Dashboard</h1>

        <h2>Current Time</h2>

        <div className="timer">
            <Timer />
        </div>

        <div className="about">
            <h2>SYSTEM OVERVIEW & TELEMETRY</h2>
            <hr />
            <p className='welcome'>
                <br />
                Welcome to the<strong> Stellaris Dashboard </strong>, an advanced orbital monitoring interface integrated directly with live data streams from NASA's deep-space telemetry nodes.</p>
            <br />
            <hr />

            <div className="briefing-features">

                <div className="feature-item">
                    <h1 className='items'>Near-Earth Objects</h1>
                    <p className='desc'>Real-time tracking of asteroid velocities, diameters, and close-approach proximity trajectories.</p>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2pn8kiwq2w21t.cloudfront.net%2Foriginal_images%2F1_overview-eyes-on-asteroids.png&f=1&nofb=1&ipt=a2d9420399bd2d53959d163bcda6313160fcfdfae8573121e60fa337e0472734' 
                    alt="space galaxy"
                    className='nearObj'/>
                </div>
                
                <div className="feature-item">

                    <h1 className='items'>Magnetosphere Weather</h1>
                    <p className='desc'>Live monitoring of solar flare disruptions, coronal mass ejections, and geomagnetic storms.</p>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffacts.net%2Fwp-content%2Fuploads%2F2025%2F02%2F28-facts-about-magnetosphere-1738626093.jpg&f=1&nofb=1&ipt=fd745fa9d53e1deebd074bc380e8d3b342a855154df67bb3b6696e080b39a38e' 
                    alt="Magnetosphere Weather"
                    className='nearObj'/>
                
                </div>

                <div className="feature-item">
                    <h1>Deep Space Imaging</h1>
                    <p className='desc'>Daily high-resolution telemetry capturing deep-space phenomena, nebulae, and distant galaxies.</p>
                    <img 
                        src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500" 
                        alt="Deep space galaxy" 
                        className="newObj" 
                    />
                    </div>
            </div>
            </div>

        </>
    )
}

export default Home;