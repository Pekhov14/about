'use client'

const About = () => {
    return (
        <section className="content">
            <div className="content__bg content__bg--bottom" style={{backgroundImage: 'url(assets/img/1.jpeg)' }}>
                <svg className="separator separator--up" width="100%" height="100%" viewBox="0 0 100 10"
                     preserveAspectRatio="none">
                    <path className="separator__path path-anim" data-path-to="M 0 0 C 35 21 70 0 100 0 L 0 0 Z"
                          vectorEffect="non-scaling-stroke" d="M 0 0 C 37 0 70 0 100 0 L 0 0 Z"/>
                </svg>
                <svg className="separator separator--down" width="100%" height="100%" viewBox="0 0 100 10"
                     preserveAspectRatio="none">
                    <path className="separator__path path-anim" data-path-to="M 0 0 C 29 6 78 17 100 0 L 100 10 H 0 Z"
                          vectorEffect="non-scaling-stroke" d="M 0 0 C 18 1 61 9 100 0 L 100 10 H 0 Z"/>
                </svg>
                <div className="content__title text-light content__title--right">
                    <h2 className="content__title-main">About me</h2>
                </div>
            </div>
            <div className="content__sides">
                <div className="content__text">
                    <h2>PHP Software Developer</h2>
                    <span className="pt-5 pb-5">Experienced in opencart & symfony</span>

                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <i className="bi bi-linkedin"></i>
                            <a href="https://www.linkedin.com/in/anton-pekhov"
                               target="_blank"
                               className="fast-icon"> LinkedIn</a>
                        </li>
                        <li className="list-inline-item">
                            <i className="bi bi-medium"></i>
                            <a href="https://medium.com/@pehov21"
                               target="_blank"
                               className="fast-icon"> Medium</a>
                        </li>
                        <li className="list-inline-item">
                            <i className="bi bi-github"></i>
                            <a href="https://github.com/Pekhov14"
                               target="_blank"
                               className="fast-icon"> GitHub</a>
                        </li>
                        <li className="list-inline-item">
                            <i className="bi bi-envelope-fill"></i>
                            <a href="mailto:pehovanton21@gmail.com"
                               className="fast-icon"> Email Us</a>
                        </li>
                    </ul>

                    <div className="text-center-1">
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="flex w-0 flex-1 items-center">
                                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                                     fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                          clipRule="evenodd"/>
                                </svg>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">cv_anton_pekhov_backend_developer.pdf</span>
                                    <span className="flex-shrink-0 text-gray-400">239kb</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
                                       download
                                       className="font-medium text-indigo-600 hover:text-indigo-500">Download <span
                                        aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <svg className="image-clip" width="600px" height="600px" viewBox="0 0 600 600">
                    <defs>
                        <clipPath id="shape11">
                            <path className="path-anim"
                                  data-path-to="M422.248 192.542c44.2 49.2 94.8 86.9 111.3 141.1 16.5 54.2-1.1 124.9-45.3 161.8-44.2 36.8-114.9 39.7-167.9 22.1-53.1-17.7-88.4-56-137.1-92.9-48.6-36.8-110.6-72.1-121.2-118.1-10.6-46 30.1-102.5 78.8-151.7 48.7-49.2 105.2-90.9 152.4-81.5 47.1 9.4 84.8 70 129 119.2"
                                  d="M494.246 145.646c25 39 10.2 103.8-1.2 157.2-11.4 53.4-19.5 95.3-44.5 129.3-25 34-66.9 60.1-120.6 71.7-53.6 11.7-118.9 9-163.7-25-44.8-34-69.2-99.3-71.9-167.3-2.7-68 16.2-138.7 61-177.7 44.9-39 115.6-46.3 183.4-43.4 67.7 3 132.5 16.2 157.5 55.2"/>
                        </clipPath>
                    </defs>
                    <image clipPath="url(#shape11)" xlinkHref="assets/img/2.jpeg" x="0" y="0" width="600"
                           height="600"/>
                </svg>
            </div>
        </section>
    )
}

export {About}