function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + "Tab").classList.add("active");
}

// Set the default tab to open on page load
document.addEventListener("DOMContentLoaded", function() {
    openTab('home');
});

function openSkillTab(tabName) {
    var i, skillContent, skillTabs;
    skillContent = document.getElementsByClassName("skill-content");
    for (i = 0; i < skillContent.length; i++) {
        skillContent[i].style.display = "none";
    }
    skillTabs = document.getElementsByClassName("skill-tab");
    for (i = 0; i < skillTabs.length; i++) {
        skillTabs[i].className = skillTabs[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Ensure the "Languages" tab is active and visible by default on page load
document.addEventListener("DOMContentLoaded", function() {
    openSkillTab('learningJourney');
});
