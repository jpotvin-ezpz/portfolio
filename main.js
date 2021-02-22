const projects = document.querySelectorAll('.project')
const jsProject = document.querySelector('.project3');
const filterButtons = document.querySelectorAll('.filter-btn');
const allButton = document.querySelector('#all-btn');
const htmlButton = document.querySelector('#html-btn');
const jsButton = document.querySelector('#js-btn');
const fwButton = document.querySelector('#fw-btn');

allButton.addEventListener('click', (e) => {
  filterButtons.forEach(button => {
    button.classList.remove('active')
  })
  e.target.classList.add('active');
  projects.forEach(project => {
    project.classList.add('active');
  })
})

htmlButton.addEventListener('click', (e) => {
  filterButtons.forEach(button => {
    button.classList.remove('active')
  })
  e.target.classList.add('active');
  projects.forEach(project => {
    project.classList.add('active');
  })
  jsProject.classList.remove('active');
})

jsButton.addEventListener('click', (e) => {
  filterButtons.forEach(button => {
    button.classList.remove('active')
  })
  e.target.classList.add('active');
  projects.forEach(project => {
    project.classList.remove('active')
  })
  jsProject.classList.add('active')
})

fwButton.addEventListener('click', (e) => {
  filterButtons.forEach(button => {
    button.classList.remove('active')
  })
  e.target.classList.add('active');
  projects.forEach(project => {
    project.classList.remove('active')
  })
})