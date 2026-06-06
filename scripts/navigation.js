const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;


////////////Hamburger Button Section/////////////////////
const hamButton = document.querySelector("#nav-button");
////////////Navigation Bar Section/////////////////////
const navBar = document.querySelector("#nav-bar");
//Event listener
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    navBar.classList.toggle("show");
});
//Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
//Populating the ul
const courseList = document.querySelector('#course-list');
// dialog variables
const courseDetails = document.querySelector("#course-details");
function displayCourseDetails(course) {
    courseDetails.innerHTML = "";
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p>${course.credits} credits</p>
        <p>Certificate: ${course.certificate}</p>
        <p>${course.description}</p>
        <p>Technologies: ${course.technology.join(", ")}</p>
    `;
    courseDetails.showModal();
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}


function displayCourses(courses) {
    courseList.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = `${course.subject} ${course.number}`;
        if (course.completed === true) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => {
            displayCourseDetails(course);
        })
        courseList.appendChild(li);
    }); // forEach ends here

    const totalCredits = courses.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    document.getElementById("total-credits").innerHTML = totalCredits;
}
displayCourses(courses);
//event listeners and filters
const allButton = document.querySelector("#all");
const cseButton = document.querySelector("#CSE");
const wddButton = document.querySelector("#WDD");

allButton.addEventListener("click", () => {
    displayCourses(courses);
});
cseButton.addEventListener("click", () => {
    const cseOnly= courses.filter(course => course.subject === "CSE");
    displayCourses(cseOnly);
});
wddButton.addEventListener("click", () => {
    const wddOnly = courses.filter(course => course.subject === "WDD");
    displayCourses(wddOnly);
});