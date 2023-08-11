import {CopyToClipboard} from "@/components/CopyToClipboard";

const Contacts = () => {
    return (
        <section className="content content--centered footer">
            <div className="container mx-auto">
                <div className="content__text content__text--left text-light p-20">
                    <h2>My contacts for questions and suggestions</h2>
                </div>

                <div className="flex flex-wrap -mx-4 p-5">
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 lg:pb-3 md:pb-3">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="flex justify-between">
                                <div className="font-medium text-slate-900"><span>Email <i className="bi bi-envelope-at"></i></span></div>
                                <CopyToClipboard value="pehovanton21@gmail.com"/>
                            </div>

                            <p>pehovanton21@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 lg:pb-3 md:pb-3">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="flex justify-between">
                                <div className="font-medium text-slate-900">
                                    <span>Telegram <i className="bi bi-telegram"></i></span>
                                </div>
                                <CopyToClipboard value="@Anthony_1654"/>
                            </div>

                            <p>
                                <a href="https://t.me/anthony_1654"
                                   target="_blank"
                                   className="h6 mb-0 fw-light stretched-link"
                                >@Anthony_1654</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="flex justify-between">
                                <div className="font-medium text-slate-900">
                                    <span>Linkedin <i className="bi bi-linkedin"></i></span>
                                </div>
                                <CopyToClipboard value="in/anton-pekhov"/>
                            </div>

                            <p>
                                <a href="https://www.linkedin.com/in/anton-pekhov"
                                   target="_blank"
                                   className="fast-icon"
                                >in/anton-pekhov</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">cv_anton_pekhov_backend_developer.pdf</span>
                                <span className="flex-shrink-0 text-gray-400">239kb</span>
                            </div>
                            <a href="assets/cv/cv_anton_pekhov_backend_developer.pdf"
                               download
                               className="font-medium text-indigo-600 hover:text-indigo-500"
                            >Download <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <svg className="separator separator--solo separator--line-light" viewBox="0 0 900 300" width="900"
                 height="600">
                <defs>
                    <clipPath id="shape12">
                        <rect x="0" y="0" width="900" height="290"></rect>
                    </clipPath>
                </defs>
                <g clipPath="url(#shape12)">
                    <path className="path-anim" vectorEffect="non-scaling-stroke"
                          data-path-to="M0,3 C16.6666667,33.6666667 75,-15 128.8,10.3 C174.770703,31.918193 272,-26 320,17 C368,60 431.272051,-18.4516816 525,10.3 C599,33 775,60 900,17 L900,304 C500,304 285.733333,304 257.2,304 C214.3,304 171.7,304 128.8,304 C100.266667,304 57.3333333,304 0,304 L0,3 Z"
                          d="M1,4 C17.6666667,34.6666667 52,50 104,50 C182,50 246.6,-27.4 386.8,11.3 C527,50 553,68 643.8,38.2 C704.333333,18.3333333 790.066667,11.6 901,18 L901,305 C501,305 286.733333,305 258.2,305 C215.3,305 172.7,305 129.8,305 C101.266667,305 58.3333333,305 1,305 L1,4 Z"></path>
                    <path className="path-anim" vectorEffect="non-scaling-stroke"
                          data-path-to="M0,90 C31.7333333,70.9333333 128.8,-21 226,66 C295.950087,128.609646 399,135 480,66 C561,-3 702.670114,107.309964 746,83 C853.3,22.8 866,101.666667 900,135 L900,304 L878.5,304 C857,304 685.7,304 642.8,304 C600,304 428.7,304 385.8,304 C343,304 300,304 257.2,304 C214.3,304 171.7,304 128.8,304 C86,304 43,304 21.5,304 L0,304 L0,90 Z"
                          d="M1,91 C32.7333333,71.9333333 75.6666667,82.8333333 129.8,123.7 C211,185 352,42 479,86 C606,130 694.4,114.4 772.2,100.2 C824.066667,90.7333333 867,102.666667 901,136 L901,305 L879.5,305 C858,305 686.7,305 643.8,305 C601,305 429.7,305 386.8,305 C344,305 301,305 258.2,305 C215.3,305 172.7,305 129.8,305 C87,305 44,305 22.5,305 L1,305 L1,91 Z"></path>
                    <path className="path-anim" vectorEffect="non-scaling-stroke"
                          data-path-to="M0,149.2 C52.6666667,137.866667 45,100 128.8,173.5 C188.188882,225.589294 203,75.9791366 284,149.2 C365,222.420863 421,105 478,173.5 C535,242 554,253 596,186 C638,119 721.4,83 771.2,159.5 C821,236 865.6,189.666667 900,207 L900,311 L878.5,311 C857,311 814,311 771.2,311 C728.3,311 685.7,311 642.8,311 C600,311 557,311 514.2,311 C471.3,311 428.7,311 385.8,311 C343,311 300,311 257.2,311 C214.3,311 171.7,311 128.8,311 C86,311 43,311 21.5,311 L0,311 L0,149.2 Z"
                          d="M1,139 C53.6666667,127.666667 96.6,139.5 129.8,174.5 C179.6,227 242.1,149.3 285,150.2 C327.9,151.1 322.6,219 386.8,181.5 C451,144 478,187 597,187 C716,187 695,139 772.2,160.5 C823.666667,174.833333 866.6,190.666667 901,208 L901,312 L879.5,312 C858,312 815,312 772.2,312 C729.3,312 686.7,312 643.8,312 C601,312 558,312 515.2,312 C472.3,312 429.7,312 386.8,312 C344,312 301,312 258.2,312 C215.3,312 172.7,312 129.8,312 C87,312 44,312 22.5,312 L1,312 L1,139 Z"></path>
                    <path className="path-anim" vectorEffect="non-scaling-stroke"
                          data-path-to="M0,242 C57.3333333,235.333333 27.6,275 128.8,231.5 C230,188 197.2,242.2 291,270 C384.8,297.8 444,209.729976 543,248.729976 C642,287.729976 689.4,223 771.2,223 C853,223 842.666667,272.333333 900,263 L900,304 L0,304 L0,242 Z"
                          d="M1,243 C58.3333333,236.333333 101.266667,232.833333 129.8,232.5 C172.7,232 164.4,204.4 258.2,232.2 C352,260 380,165 479,204 C578,243 729.3,230 772.2,224 C800.733333,220 843.666667,213.333333 901,204 L901,305 L1,305 L1,243 Z"></path>
                </g>
            </svg>
            <p className="credits">2023 - ANTHONY PEKHOV</p>
        </section>
    )
}

export {Contacts}