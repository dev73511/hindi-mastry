export function getRandomNumberBetween(min, max) {
    // Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive)
    // Multiply by the range (max - min) and add min to shift the range
    return Math.floor(Math.random() * (max - min + 1)) + min;
}