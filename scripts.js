function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert('Please enter your birthdate');
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
