document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    
    searchInput.addEventListener("input", function() {
        const query = searchInput.value;
        
        fetch(`backend/search.php?q=${query}`)
            .then(response => response.json())
            .then(courses => {
                const courseList = document.getElementById("course-list");
                courseList.innerHTML = ''; // Clear current course list
                
                courses.forEach(course => {
                    const courseElement = document.createElement("div");
                    courseElement.classList.add("course-card");
                    courseElement.innerHTML = `
                        <img src="assets/images/${course.image}" alt="${course.name}">
                        <h3>${course.name}</h3>
                        <p>${course.description}</p>
                        <span class="price">₹${course.price}</span>
                        <button class="enroll-btn">Enroll Now</button>
                    `;
                    courseList.appendChild(courseElement);
                });
            });
    });
});
