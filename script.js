document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".navbar2-main-second ul li");
    const underline = document.querySelector(".underline");
    const activeItem = document.querySelector(".navbar2-main-second ul .active");

    function moveUnderline(element) {
        underline.style.width = `${element.offsetWidth}px`;
        underline.style.left = `${element.offsetLeft}px`;
    }

    // Set initial position (under "Internship")
    moveUnderline(activeItem);

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            moveUnderline(this);
        });
    });

    // Return to default when mouse leaves the menu
    document.querySelector(".navbar2-main-second").addEventListener("mouseleave", function () {
        moveUnderline(activeItem);
    });
});


{/* <li><p>Enhancing teaching and research skills</p></li>
                <li>Encouraging continuous learning and self-improvement</li>
                <li>Improving student engagement and learning outcomes</li>
                <li>Contributing to national knowledge and innovation</li>
                <li>Strengthening the workforce with skilled graduates</li>
                <li>Driving economic growth through research and industry collaboration.</li> */}