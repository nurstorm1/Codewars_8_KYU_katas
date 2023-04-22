function chromosomeCheck(sperm) {
    if (sperm.includes('XY')) return "Congratulations! You're going to have a son.";
    if (sperm.includes('XX')) return "Congratulations! You're going to have a daughter.";
}