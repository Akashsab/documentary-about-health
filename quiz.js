document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('quiz-results');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const question1 = document.getElementById('question1').value.trim().toLowerCase();
        const question2 = document.getElementById('question2').value.trim().toLowerCase();
        
        let score = 0;

        if (question1 === 'transport nutrients and oxygen') {
            score++;
        }

        if (question2 === '7 to 9') {
            score++;
        }

        resultsDiv.innerHTML = `<p>Your score: ${score}/2</p>`;
    });
});
