const Education = () => {
    return (
        <section className="content">
            {/*style="background-image:url(assets/img/4.jpg);"*/}
            <div className="content__bg content__bg--bottom">
                <svg className="separator separator--up" width="100%" height="100%" viewBox="0 0 100 10"
                     preserveAspectRatio="none">
                    <path className="separator__path path-anim"
                          data-path-to="M 0 0 C 17 21.6 35.2 1.2 50 1.4 C 65.2 1.5 83 21.6 100 0 L 0 0 Z"
                          vectorEffect="non-scaling-stroke" d="M 0 0 C 23 0 35 0 50 0 C 65 0 74 0 100 0 L 0 0 Z"/>
                </svg>
                <svg className="separator separator--down" width="100%" height="100%" viewBox="0 0 100 10"
                     preserveAspectRatio="none">
                    <path className="separator__path path-anim"
                          data-path-to="M 24 0 C 33 0 37 10 49 10 C 61 10 65 0.1 74 0 C 83 0 90 10 100 0 L 100 10 L 0 10 L 0 0 C 9 7 15 0.1 24 0 Z"
                          vectorEffect="non-scaling-stroke"
                          d="M 24 0 C 33 0 30 0 49 0 C 64 0 65 0.1 74 0 C 83 0 82 0 100 0 L 100 10 L 0 10 L 0 0 C 11 0 15 0.1 24 0 Z"/>
                </svg>
                <div className="content__title text-light content__title--right">
                    <h2 className="content__title-main">Education</h2>
                </div>
            </div>

            <div className="content--centered">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h3 className="text-3xl font-bold pb-2">National Aerospace University - "Kharkiv Aviation Institute"</h3>

                <p>Telecommunications and Radio Engineering 2017 - 2021</p>

                <div className="card-body pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <ul className="list-none">
                            <li className="flex items-center space-x-2">
                                <i className="bi bi-check-circle-fill"></i>
                                <a href="https://symfonycasts.com/certificates/B27F144BC131" target="_blank"
                                   className="text-base font-light">Doctrine, Symfony &amp; the Database</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="bi bi-check-circle-fill"></i>
                                <a href="https://symfonycasts.com/certificates/2F51C994C127" target="_blank"
                                   className="text-base font-light">Charming Development in Symfony5</a>
                            </li>
                        </ul>
                        <ul className="list-none">
                            <li className="flex items-center space-x-2">
                                <i className="bi bi-check-circle-fill"></i>
                                <a href="https://www.datacamp.com/statement-of-accomplishment/course/7abaa3307319dfd44d6bdeb82985e18a2b642a5e"
                                   target="_blank" className="text-base font-light">Introduction to Relational Databases
                                    in
                                    SQL</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="bi bi-check-circle-fill"></i>
                                <a href="https://www.datacamp.com/statement-of-accomplishment/course/08789943e5fd483ff2417c31aaaff459e9324ebd"
                                   target="_blank" className="text-base font-light">Introduction to SQL</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="bi bi-check-circle-fill"></i>
                                <a href="https://www.datacamp.com/statement-of-accomplishment/course/34e445bcd770c810c7ad184068b852c5c3629412"
                                   target="_blank" className="text-base font-light">Joining Data in SQL</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Education}