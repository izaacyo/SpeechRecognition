const texts = document.querySelector(".texts"); // getting the text from

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; // real time results. false will wait until talk ends to give results

let p = document.createElement("p");

recognition.addEventListener("result", (e) => { //passing the event
    texts.appendChild(p);
    console.log(e)
    const text = Array.from(e.results) // make the results an array 
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join(""); // add the transcripts togheter


    p.innerText = text; // display results on website

    if (e.results[0].isFinal) {
        if (text.includes("how are you")) {
            p = document.createElement("p");// create new paragraph
            p.classList.add("reply"); // class for styling
            p.innerText = "I am fine. How about you?";
            texts.appendChild(p);
        }
        if (
            text.includes("what's your name") ||
            text.includes("what is your name")
        ) {
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "My name is HP Probook.";
            texts.appendChild(p);
        }

        if (text.includes("open YouTube")) {
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "opening YouTube";
            texts.appendChild(p);
            console.log("opening youtube");
            window.open("https://www.youtube.com");
        }
        p = document.createElement("p");
    }
});

// start new sessions but overrights see line 21
recognition.addEventListener("end", () => {
    recognition.start();
});

recognition.start();
