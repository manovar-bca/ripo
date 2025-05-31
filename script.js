/*document.getElementById("searchBox").addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    let subjects = document.querySelectorAll(".subject");
  
    subjects.forEach((subject) => {
      let text = subject.textContent.toLowerCase();
      subject.style.display = text.includes(filter) ? "block" : "none";
    });
  });*/
  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }



  /*button*/
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.textContent = "↑ Scroll to Top";
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "20px";
  scrollToTopBtn.style.right = "20px";
  scrollToTopBtn.style.padding = "10px 20px";
  scrollToTopBtn.style.fontSize = "16px";
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


/*search*/
const subjects = [
  { name: "C Programming", link: "c.html" },
  { name: "C++ Programming", link: "cpp.html" },
  { name: "JavaScript Programming", link: "javascript.html" },
  { name: "C loop", link: "c loop.html" },
  { name: "C++ Programming", link: "cpp.html" },
  { name: "JavaScript Programming", link: "javascript.html" },
  
  // Add more subjects here
];

function filterSubjects() {
  const input = document.getElementById('searchBox');
  const filter = input.value.toUpperCase();
  const suggestions = document.getElementById('suggestions');
  
  suggestions.innerHTML = ''; // Clear previous suggestions

  if (filter) {
    const filteredSubjects = subjects.filter(subject =>
      subject.name.toUpperCase().includes(filter)
    );

    filteredSubjects.forEach(subject => {
      const li = document.createElement('li');
      li.textContent = subject.name;
      li.onclick = () => {
        window.location.href = subject.link;
      };
      suggestions.appendChild(li);
    });
  }
}



  




 
    document.getElementById('searchBox').addEventListener('keydown', function(event) {
      if (event.key === 'Enter' && this.value.trim() !== '') {
        const searchQuery = this.value.trim().toLowerCase();
        const subjectList = document.getElementById('subjectList');
        const subjects = subjectList.getElementsByClassName('subject');
        let found = false;

        for (let i = 0; i < subjects.length; i++) {
          const subject = subjects[i];
          const subjectName = subject.querySelector('h3').textContent.toLowerCase();
          const chapterLinks = subject.querySelectorAll('ul li');

          if (subjectName.includes(searchQuery)) {
            subject.style.display = 'block';
            found = true;
          } else {
            subject.style.display = 'none';
          }

          chapterLinks.forEach(function(chapter) {
            const chapterTitle = chapter.textContent.toLowerCase();
            if (chapterTitle.includes(searchQuery)) {
              chapter.style.display = 'block';
              found = true;
            } else {
              chapter.style.display = 'none';
            }
          });
        }

        if (!found) {
          alert('No matching subjects or chapters found.');
        }
      }
    });


/*dms*/







    /*os*/
    const questions = [
  {
    question: "Which of the following is not an operating system?",
    options: ["Linux", "Windows", "Oracle", "MacOS"],
    answer: 2
  },
  {
    question: "What is the main function of an operating system?",
    options: [
      "Provides an interface between the user and hardware",
      "Compiles code",
      "Manages internet connection",
      "Manages databases"
    ],
    answer: 0
  },
  {
    question: "Which one is a type of multitasking?",
    options: ["Process-based", "Thread-based", "Time-sharing", "All of the above"],
    answer: 3
  },
  {
    question: "Which scheduling algorithm is non-preemptive?",
    options: ["SJF", "RR", "Priority", "FCFS"],
    answer: 3
  },
  {
    question: "What is a deadlock?",
    options: [
      "A condition where processes keep executing",
      "A condition where processes are blocked forever",
      "A memory overflow",
      "A scheduling algorithm"
    ],
    answer: 1
  },
  {
    question: "What does the 'thrashing' term mean in OS?",
    options: [
      "Excessive CPU usage",
      "Excessive swapping between main memory and disk",
      "Corrupted files",
      "Hardware failure"
    ],
    answer: 1
  },
  {
    question: "Which is a page replacement algorithm?",
    options: ["FIFO", "LRU", "Optimal", "All of the above"],
    answer: 3
  },
  {
    question: "What is the unit of memory allocation in paging?",
    options: ["Page", "Segment", "Frame", "Block"],
    answer: 0
  },
  {
    question: "Which of these is NOT a file system?",
    options: ["NTFS", "FAT32", "ext4", "DDR4"],
    answer: 3
  },
  {
    question: "Which command is used to list processes in Linux?",
    options: ["ls", "ps", "top", "proc"],
    answer: 1
  },
  {
    question: "Which memory is volatile?",
    options: ["ROM", "Cache", "Hard Disk", "RAM"],
    answer: 3
  },
  {
    question: "Which of these is NOT a type of kernel?",
    options: ["Monolithic", "Microkernel", "Hybrid", "Nanokernel"],
    answer: 3
  },
  {
    question: "What is context switching?",
    options: [
      "Switching from kernel mode to user mode",
      "Switching between user accounts",
      "Saving and loading process state during CPU switching",
      "None of the above"
    ],
    answer: 2
  },
  {
    question: "Semaphore is used to:",
    options: ["Deadlock detection", "Resource allocation", "Process synchronization", "Memory management"],
    answer: 2
  },
  {
    question: "Which is not a disk scheduling algorithm?",
    options: ["SSTF", "LOOK", "SCAN", "FIFO"],
    answer: 3
  },
  {
    question: "Which of these is not part of process states?",
    options: ["Running", "Waiting", "Executing", "Terminated"],
    answer: 2
  },
  {
    question: "Which memory management technique suffers from external fragmentation?",
    options: ["Paging", "Segmentation", "Swapping", "Contiguous Allocation"],
    answer: 3
  },
  {
    question: "What does CPU scheduling decide?",
    options: ["Memory location", "Next process to execute", "Next instruction", "Next I/O device"],
    answer: 1
  },
  {
    question: "In round-robin scheduling, time quantum is:",
    options: ["Fixed", "Dynamic", "Variable", "None"],
    answer: 0
  },
  {
    question: "Virtual memory is:",
    options: [
      "Memory on the hard disk",
      "Memory in RAM",
      "Fake memory",
      "An illusion of large memory created using disk"
    ],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").innerText = `Q${currentQuestion + 1}: ${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index, btn);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected, btn) {
  const correct = questions[currentQuestion].answer;
  const allButtons = document.querySelectorAll("#options button");

  allButtons.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add("correct");
    if (i === selected && i !== correct) b.classList.add("wrong");
  });

  if (selected === correct) score++;
  document.getElementById("next-btn").style.display = "inline-block";
}

function loadNextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("question-box").innerHTML = `<h2>🎉 Quiz Completed!</h2><p>You scored ${score} out of ${questions.length}.</p>`;
  document.getElementById("next-btn").style.display = "none";
}

window.onload = loadQuestion;

