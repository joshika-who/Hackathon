async function askAI() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer");

    if (question.trim() === "") {
        answer.textContent = "Please enter a question.";
        return;
    }

    answer.textContent = "Thinking...";

    try {
        let response = await fetch("http://127.0.0.1:8000/ask-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        let data = await response.json();
        answer.textContent = data.answer;

    } catch (error) {
        answer.textContent = "Could not connect to the AI. Check whether FastAPI is running.";
    }
}
