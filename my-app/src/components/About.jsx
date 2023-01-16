import React from 'react';
function About(){
    return(
        <section className="about" id='About'>
            <div className="container">
                <div className="common">
                    <h1 className='about-title'>About Me</h1>
                    <div className="underline-border"></div>
                </div>

                <div className='row'>
                    <div className="col-6">
                        <div className="about__img">
                            <img src="./photos.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1>Creative UI & UX Design <br /></h1>
                            <div className="about__info">
                                <p>Autodidacte depuis mon plus jeune âge, j'aime apprendre de nouvelles choses pour améliorer mes compétences. De nature très curieuse, j'adore le monde du web et des nouvelles technologies, ce que j'aime le plus c'est l'art et la précision derrière chaque conception. Avec toutes mes capacités et mes connaissances, j'aurai le plaisir de me consacrer pleinement au développement de vos idées afin d'en faire de grands projets. <br /> <br />

                                Pour ce qui est de ma formation, j'ai commencé en dernière année de lycée avec python et j'ai adoré, la façon de penser, d'optimiser et d'afficher les choses uniquement avec des lignes de codes m'a tout de suite fasciné. J'ai donc décidé d'aller dans une école d'informatique : L'ETNA. Ce qui est bien, c'est qu'il y a l'alternance et l'autonomie. On apprend en réalisant des projets passionnants qui stimulent notre créativité et notre envie d'apprendre.
                                </p>

                                <div className="about__buttons">
                                   <a href="#about" className='btn about-btn-outline'>

                                    Telecharger CV
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;