'use client'

const Education = () => {
    return (
        <section className="content">
            <div className="content__title content__stacked">
                <h4 className="content__title-main">Education</h4>
            </div>
            <div className="content--center pb-20">
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