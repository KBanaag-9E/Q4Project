// 1. How is our portfolio overall?
function question1(clickedId) {
    const clickedStar = parseInt(clickedId.charAt(0)); // Get the number from id like '1star-A' → 1

    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(i + 'star-A');
        if (i <= clickedStar) {
            star.style.color = "yellow";
        } else {
            star.style.color = "black";
        }
    }
}

// 2. Was the information presented in this portfolio clear and helpful?
function question2(clickedId) {
    const clickedStar = parseInt(clickedId.charAt(0)); // Get the number from id like '1star-A' → 1

    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(i + 'star-B');
        if (i <= clickedStar) {
            star.style.color = "yellow";
        } else {
            star.style.color = "black";
        }
    }
}

// 3. How is the design and layout of this portfolio?
function question3(clickedId) {
    const clickedStar = parseInt(clickedId.charAt(0)); // Get the number from id like '1star-A' → 1

    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(i + 'star-C');
        if (i <= clickedStar) {
            star.style.color = "yellow";
        } else {
            star.style.color = "black";
        }
    }
}

// 4. How are the projects featured this portfolio?
function question4(clickedId) {
    const clickedStar = parseInt(clickedId.charAt(0)); // Get the number from id like '1star-A' → 1

    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(i + 'star-D');
        if (i <= clickedStar) {
            star.style.color = "yellow";
        } else {
            star.style.color = "black";
        }
    }
}
