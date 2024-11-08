document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.getElementById("course-list");

    // Load courses dynamically
    fetch('/api/courses')
        .then(response => response.json())
        .then(data => {
            data.forEach(course => {
                const courseElement = createCourseElement(course);
                courseList.appendChild(courseElement);
            });
        });

    // Function to create course element
    function createCourseElement(course) {
        const template = document.getElementById("course-template").cloneNode(true);
        template.style.display = "block";
        template.querySelector(".course-name").innerText = course.name;
        template.querySelector(".original-price").innerText = `Original Price: ₹${course.price}`;
        template.querySelector(".discounted-price").innerText = `Discounted Price: ₹${course.discount}`;
        template.querySelector(".purchase-btn").onclick = () => {
            window.location.href = 'payment.html';
        };
        return template;
    }
});
