 @param {string} inputId - The ID of the input box element.
 * @param {number} delay - The delay in milliseconds between each entry.
 */
function enterRandomValues(inputId, delay) {
    const inputBox = document.getElementById(inputId);
    const enteredValues = new Set();
 
    /**
     * Function to generate a random value.
     *
     * @returns {string} Random value.
     */
    function generateRandomValue() {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomValue = '';
 
        for (let i = 0; i < 10; i++) {
            randomValue += characters.charAt(Math.floor(Math.random() * characters.length));
        }
 
        return randomValue;
    }
 
    /**
     * Function to enter a random value into the input box.
     */
    function enterRandomValue() {
        const randomValue = generateRandomValue();
 
        if (!enteredValues.has(randomValue)) {
            inputBox.value = randomValue;
            enteredValues.add(randomValue);
        }
    }
 
    setInterval(enterRandomValue, delay);
}
 
// Usage Example
// Assuming there is an input box with the ID "myInput"
enterRandomValues("myInput", 1000);
