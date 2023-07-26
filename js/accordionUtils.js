export function generateAccordionElements(data) {
    let result = '';

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const question = data[key].question;
            const answer = data[key].answer;

            // TODO: Можно вынести константу
            const accordionElement = `
                <div class="transition hover:bg-indigo-50">
                    <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                        <i class="bi bi-plus"></i>
                        <h5>${question}</h5>
                    </div>
                    <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                        <p class="leading-6 font-light pl-9 text-justify pb-5">
                            ${answer}
                        </p>
                    </div>
                </div>
            `;

            result += accordionElement;
        }
    }

    return result;
}

export function renderAccordionElements(data, dataPlacementId) {
    const accordionContainer = document.getElementById(dataPlacementId);
    accordionContainer.innerHTML = data;
}

export function toggleAccordion() {
    const accordionHeader = document.querySelectorAll(".accordion-header");

    accordionHeader.forEach((header) => {
        header.addEventListener("click", function () {
            const accordionContent = header.parentElement.querySelector(".accordion-content");
            let accordionMaxHeight = accordionContent.style.maxHeight;
            
            if (accordionMaxHeight === "0px" || accordionMaxHeight.length === 0) {
                accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
                header.querySelector(".bi").classList.remove("bi-plus");
                header.querySelector(".bi").classList.add("bi-dash");
                header.parentElement.classList.add("bg-indigo-50");
            } else {
                accordionContent.style.maxHeight = `0px`;
                header.querySelector(".bi").classList.add("bi-plus");
                header.querySelector(".bi").classList.remove("bi-dash");
                header.parentElement.classList.remove("bg-indigo-50");
            }
        });
    });
}