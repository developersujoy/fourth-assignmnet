// console.log("connected sucessfully");
// selecting html elements
let totalCount = document.getElementById("totalCount");
// console.log(totalCount.innerText);
let interviewCount = document.getElementById("interviewCount");
// console.log(interviewCount.innerText);
let rejectedCount = document.getElementById("rejectedCount");
// console.log(rejectedCount.innerText);
let tabCount = document.getElementById("tabCount");
// console.log(tabCount.innerText)
let emtyMessage = document.getElementById("emtyMessage");
// console.log(emtyMessage.innerHTML);

document.addEventListener("click", function (e) {

    let element = e.target;
    // console.log(element);

    // click on delete
    if (element.classList.contains("deleteBtn")) {
        let card = element.closest(".jobCard");
        card.remove();
    }
    //interview button
    if (element.classList.contains("interviewBtn")) {
        let card = element.closest(".jobCard");
        let badge = card.querySelector(".statusBadge");
        card.dataset.status = "interview";
        badge.innerText = "INTERVIEW";
        badge.className = "statusBadge inline-block statusBadge inline-block mt-5 px-2 py-2 px-3 font-medium text-[14px]  rounded-[4px] bg-green-200 text-green-800"
    }
    // reject button
    if (element.classList.contains("rejectBtn")) {
        let card = element.closest(".jobCard");
        let badge = card.querySelector(".statusBadge");
        card.dataset.status = "rejected";
        badge.innerText = "REJECTED";
        badge.className = "statusBadge inline-block statusBadge inline-block mt-5 px-2 py-2 px-3 font-medium text-[14px]  rounded-[4px] bg-red-200 text-red-800"
    }
    // tab button changing color and section 
    if (element.classList.contains("tabBtn")) {
        currentTab = element.dataset.tab;
        let tabs = document.querySelectorAll(".tabBtn");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("bg-[#3B82F6]", "text-white");
            tabs[i].classList.add("bg-gray-200");


        }
        element.classList.remove("bg-gray-200");
        element.classList.add("bg-[#3B82F6]", "text-white");
    }
    // lets update jobcards
    let cards = document.querySelectorAll(".jobCard");
    let total = 0;

    let interview = 0;
    let rejected = 0;
    let visible = 0;

    for (let i = 0; i < cards.length; i++) {
        total++;
        let status = cards[i].dataset.status;
        if (status == "interview") {
            interview++;
        }
        if (status == "rejected") {
            rejected++;
        }
        if (currentTab == "all") {
            cards[i].style.display = "block";
            visible++;
        } else if (status === currentTab) {
            cards[i].style.display = "block";
            visible++;
        }
        else {
            cards[i].style.display = "none";
        }
    }
    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
    tabCount.innerText = visible + " jobs";

    if (visible === 0) {
        emtyMessage.classList.remove("hidden");

    } else {
        emtyMessage.classList.add("hidden");
    }
});