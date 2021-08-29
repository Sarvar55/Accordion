[...document.querySelectorAll(".accordion__item")].forEach(item => {
    const accordionHead = item.querySelector(".accordion__header");
    accordionHead.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion__open");

        toogleItem(item)
        if (openItem && openItem !== item) {
            toogleItem(openItem)

        }

    });
});

const toogleItem = (item) => {
    const accordionContent = item.querySelector(".accordion__content");
    const accordionIcon = item.querySelector(".accordion__icon");
    if (item.classList.contains("accordion__open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion__open");
        accordionIcon.removeAttribute("style");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add("accordion__open");
        accordionIcon.style.transform = "rotate(180deg)";
    }
}