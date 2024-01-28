import './hero.css'
import "bootstrap/dist/css/bootstrap.min.css"
import CustomCard from './customCard'
import videoNilo from '../../assets/video-nilo.mp4'
import image3x3 from '../../assets/3x3.jpg'
import image2x2 from '../../assets/2x2.jpg'


const Hero = () => {
    return (
        <main className='section-hero'>
            <div className="containers">
                <video  muted loop autoPlay src={videoNilo}></video>
                <div className='section-hero-content'>
                    <div className='section-hero-title'>
                        <h1>RocketFlow</h1>
                    </div>
                    <div className='section-hero-body'>
                        <CustomCard
                            title='Temporada 3x3'
                            imageSrc={image3x3}
                            description='Acesse todas as temporadas 3x3 do Rocket Perdidos!'
                            link='google.com'
                        />
                        <CustomCard
                            title='Temporada 2x2'
                            imageSrc={image2x2}
                            description='Em breve será possível acompanhar a temporada 2x2!'
                            link='#'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero;