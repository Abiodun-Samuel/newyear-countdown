

const daysId = document.getElementById("days");
const hoursId = document.getElementById("hours");
const minsId = document.getElementById("mins");
const secondsId = document.getElementById("seconds");
const date_form = document.getElementById("date");
const year = document.getElementById("year");
const error = document.getElementById("error");
const present_date = document.getElementById("present_date");
const present_month = document.getElementById("present_month");
const present_year = document.getElementById("present_year");
const current_time = new Date();
var newYears = localStorage.getItem("COUNTDOWN_DATE");
var month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

year.innerText = current_time.getFullYear();
present_year.innerText = current_time.getFullYear();
present_month.innerText = month[current_time.getMonth()];

// append suffix to date
// console.log(current_time.getDate().toString().length);
if (current_time.getDate().toString().length == 2) {
  current_time.getDate().toString()[1] == 1 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>st</sup>");
  current_time.getDate().toString()[1] == 2 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>nd</sup>");
  current_time.getDate().toString()[1] == 3 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>rd</sup>");
  current_time.getDate().toString()[1] > 4 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>th</sup>");
} else if (current_time.getDate().toString().length == 1) {
  current_time.getDate().toString()[0] == 1 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>st</sup>");
  current_time.getDate().toString()[0] == 2 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>nd</sup>");
  current_time.getDate().toString()[0] == 3 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>rd</sup>");
  current_time.getDate().toString()[0] > 4 &&
    (present_date.innerHTML = current_time.getDate() + "<sup>th</sup>");
}

date_form.addEventListener("submit", () => {
  // e.preventDefault();
  if (date_form.date.value && date_form.date.value !== "") {
    localStorage.setItem("COUNTDOWN_DATE", date_form.date.value);
    date_form.reset();
  }
});
// console.log(new Date() - new Date(newYears));

if (newYears && new Date(newYears) >= current_time) {
  countdown();
  setInterval(countdown, 1000);
} else {
  error.innerText = "Please enter valid date (Future Date)";
}

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysId.textContent = days;
  hoursId.textContent = formatTime(hours);
  minsId.textContent = formatTime(minutes);
  secondsId.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: [
        "#1abc9c",
        "#9b59b6",
        "#2c3e50",
        "#3498db",
        "#e74c3c",
        "#ecf0f1",
        "#f1c40f",
        "#ffffff",
        "#000000",
      ],
    },
    shape: {
      type: ["circle", "triangle", "star", "polygon", "edge"],
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 4,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
});
