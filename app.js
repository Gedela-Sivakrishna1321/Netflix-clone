const faqListItem = document.querySelectorAll(".faq-list ul li");
const languageDropBtn = document.getElementById("#language-btn")

faqListItem.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('show')
    })
})

// languageDropBtn.addEventListener("click", () => {
//     document.getElementById('#dropdown-list').toggle('show');
// })