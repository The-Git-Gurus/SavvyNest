function addToCart(courseName, price) {
cart.push({courseName, price});
alert(courseName + ' has been added to your cart.');
}

function searchCourses() {
let input = document.getElementById('searchBar').value.toLowerCase();
let courseContainer = document.getElementById('courseContainer');
let courses = courseContainer.getElementsByClassName('course-box');

for (let i = 0; i < courses.length; i++) {
    let courseTitle = courses[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
    if (courseTitle.includes(input)) {
        courses[i].style.display = '';
    } else {
        courses[i].style.display = 'none';
    }
}
}
