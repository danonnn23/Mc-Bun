import HeroSectionBanner from '../assets/Hero_section_banner.png';

function Home() {
    return (
        <>
            <div className='home-container'>
                <div className="hero-section">
                    <img src={HeroSectionBanner} alt="Hero section banner" />
                </div>
            </div>
        </>
    )
}

export default Home