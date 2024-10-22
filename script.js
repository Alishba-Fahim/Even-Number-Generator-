document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let start = Number(document.getElementById('start').value);
    let end = Number(document.getElementById('end').value);
    let result = document.getElementById('result');
    result.innerHTML = '';

    if (!isNaN(start) && !isNaN(end) && start <= end) {
        let evenNumbers = [];
        for (let i = start; i <= end; i++) {
            if (i % 2 === 0) {
                evenNumbers.push(i);
            }
        }
        result.innerHTML = "Even Numbers: " + evenNumbers.join(', ');
    } else {
        alert("Please enter valid numbers with start less than or equal to end.");
    }
});
