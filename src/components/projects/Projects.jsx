import React from 'react'
import './projects.css'
import NFT from '../../assets/NFT.png'
import OnlineShop from '../../assets/OnlineShop.png'
import OnlineServices from '../../assets/api.png'
import SocialMedia from '../../assets/SocialMedia.png'
import GoogleKeep from '../../assets/GoogleKeep.jpg'

const data = [
    {
        id: 1,
        image: NFT,
        title: "NFT-Cart",
        github: "https://github.com/JaynishMandalia/NFT-Cart/",
    },
    {
        id: 2,
        image: GoogleKeep,
        title: "Google Keep",
        github: "https://github.com/JaynishMandalia/Google_Keep_Clone/",
    },
    {
        id: 3,
        image: OnlineShop,
        title: "Online Shop",
        github: "https://github.com/JaynishMandalia/OnlineShop/",
    },
    {
        id: 4,
        image: OnlineServices,
        title: "Online Home Services",
        github: "https://github.com/JaynishMandalia/OnlineHomeServices/",
    },
    {
        id: 5,
        image: SocialMedia,
        title: "Instagram Clone",
        github: "https://github.com/JaynishMandalia/SocialMediaApp/",
    },
]


const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects