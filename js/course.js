 let cart = JSON.parse(localStorage.getItem('cart')) || [];

function purchaseCourse(courseName) {
    alert(`You have purchased the ${courseName} course.`);
}

function addToCart(courseName, price) {
    cart.push({ courseName, price }); // Fixed object syntax
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${courseName} has been added to your cart.`); // Fixed template literal
}

        function searchCourses() {
            let input = document.getElementById('searchBar').value.toLowerCase();
            let courses = document.getElementsByClassName('course-box');

            for (let course of courses) {
                let title = course.getElementsByTagName('h2')[0].innerText.toLowerCase();
                course.style.display = title.includes(input) ? '' : 'none';
            }
        }

        function showDetails(courseId) {
            const courseData = {
                course1: {
                    title: 'Web Development',
                    description: 'Learn to build responsive websites using HTML, CSS, JavaScript, and modern frameworks.',
                    price: '₹5,800'
                },
                course2: {
                    title: 'Data Science',
                    description: 'Master data analysis, machine learning, and statistical modeling with Python and R.',
                    price: '₹5,500'
                },
                course3: {
                    title: 'Graphic Design',
                    description: 'Create stunning visuals using Adobe Photoshop, Illustrator, and design principles.',
                    price: '₹3,50000'
                },
                course4: {
                    title: 'Digital Marketing',
                    description: 'Master SEO, social media, and online advertising strategies.',
                    price: '₹5,5000'
                },
                course5: {
                    title: 'Python',
                    description: 'Learn Python programming from basics to advanced application development.',
                    price: '₹4,600'
                },
                course6: {
                    title: 'Mobile Communication',
                    description: 'Explore wireless technologies and mobile communication systems.',
                    price: '₹1,200'
                },
                course7: {
                    title: 'Computational Mathematics',
                    description: 'Dive into advanced mathematical tools for computational applications.',
                    price: '₹3,300'
                },
                course8: {
                    title: 'Artificial Intelligence',
                    description: 'Build AI algorithms, software infrastructure, and data pipelines.',
                    price: '₹6,500'
                },
                course9: {
                    title: 'DSA',
                    description: 'Master data structures, algorithms, and system design with hands-on practice.',
                    price: '₹7,300'
                }
            };

            const modal = document.getElementById('courseModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const modalPrice = document.getElementById('modalPrice');

            const course = courseData[courseId];
            if (course) {
                modalTitle.innerText = course.title;
                modalDescription.innerText = course.description;
                modalPrice.innerText = course.price;
                modal.style.display = 'block';
            }
        }

        function closeModal() {
            document.getElementById('courseModal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('courseModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
