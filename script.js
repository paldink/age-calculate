function checkResult() {
    const birthdayInput = document.getElementById("birthday");
    const birthday = birthdayInput.value;

    const now = new Date().getFullYear();
    const age = now - birthday;

    const resultView = document.getElementById("resultView");
    resultView.innerHTML = `Hasil: Usia anda saat ini adalah ${age}`;
}