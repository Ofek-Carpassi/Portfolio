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

    var content = document.getElementById("content");
    for(var i = 0; i < tablinks.length; i++) {
        content[i].classList.remove("active");
    }

    var selectedContent = document.getElementById(tabName);
    setTimeout(function() {
        selectedContent.classList.add("active");
    }, 100);

    // Change background color based on tab
}

// Set the default tab to open on page load
document.addEventListener("DOMContentLoaded", function() {
    openTab('home');
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openSkillTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("skill-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("skill-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}