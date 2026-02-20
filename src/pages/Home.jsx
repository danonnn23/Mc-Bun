import HeroSectionBanner from '../assets/Hero_section_banner.png';
import Features from '../components/Features.jsx'
import { NavLink } from 'react-router-dom';

function Home() {
    const features = [
        { 
          tag: "BOOM!", 
          text: "Fast Delivery. Our couriers are faster than a speeding bullet. Your bun arrives hot and ready for action!", 
          color: "hsl(39, 84%, 62%)" // Жовтий
        },
        { 
          tag: "POW!", 
          text: "Fresh Meat. No frozen villains here! Only 100% fresh beef to give your taste buds a powerful punch.", 
          color: "hsl(358, 70%, 62%)" // Червоний
        },
        { 
          tag: "ZAP!", 
          text: "Secret Sauce. A top-secret formula developed in our flavor labs. It's an electric taste experience!", 
          color: "hsl(180, 41%, 63%)" // Блакитний
        },
        { 
          tag: "CRUNCH!", 
          text: "Crispy Onions. Adding that legendary comic-book crunch with every single bite. Pure satisfaction!", 
          color: "hsl(140, 31%, 49%)" // Зелений
        },
        { 
          tag: "CHOMP!", 
          text: "Huge Portions. We don't hold back! Our burgers are so big, you'll need super-strength to finish them.", 
          color: "hsl(39, 100%, 50%)" // Помаранчевий
        },
        { 
          tag: "WOW!", 
          text: "Epic Prices. Heroic quality for a price that won't break your secret identity's bank account.", 
          color: "hsl(262, 100%, 77%)" // Фіолетовий
        }
    ];

    return (
        <>
            <main className='home-container'>
              <div className='home-container__responsive-grid'>
                <section className='cmp-hero-section'>
                  <img className='cmp-hero-section__banner' src={HeroSectionBanner} alt="" />
                </section>
                <section className='cmp-features-section'>
                  <Features items={features}></Features>
                </section>
                <section className='cmp-call-to-action-section'>
                  <h2 className='cmp-cta__title'>READY TO UNLEASH THE FLAVOR?</h2>
                  <p className='cmp-cta__subtitle'>Your stomach is calling for a hero. Don't keep it waiting!</p>
                  <NavLink to="/menu" className="cmp-cta__btn">TO THE MENU!</NavLink>
                </section>
              </div>
            </main>
        </>
    )
}

export default Home