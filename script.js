        let counter = 0;

        function incrementCounter() {
            counter++;
            document.getElementById('counterDisplay').textContent = counter;
        }
        
        function decrementCounter() {
            counter--;
            document.getElementById('counterDisplay').textContent = counter;
        }
        
        function resetCounter() {
            counter = 0;
            document.getElementById('counterDisplay').textContent = counter;
        }
        
        function processText() {
            const input = document.getElementById('userText').value;
            const output = document.getElementById('textResult');
            
            if (input.length === 0) {
                output.textContent = 'Please enter some text first';
                return;
            }
            
            const uppercase = input.toUpperCase();
            const lowercase = input.toLowerCase();
            const reversed = input.split('').reverse().join('');
            const wordCount = input.trim().split(/\s+/).length;
            
            output.innerHTML = `
                Original: ${input}<br>
                Uppercase: ${uppercase}<br>
                Lowercase: ${lowercase}<br>
                Reversed: ${reversed}<br>
                Word Count: ${wordCount}<br>
                Character Count: ${input.length}
            `;
        }
        
        let numbers = [42, 17, 8, 23, 91, 5];
        
        function displayArray() {
            document.getElementById('arrayResult').textContent = `Current array: [${numbers.join(', ')}]`;
        }
        
        function sortNumbers() {
            numbers.sort((a, b) => a - b);
            document.getElementById('arrayResult').textContent = `Sorted array: [${numbers.join(', ')}]`;
        }
        
        function reverseNumbers() {
            numbers.reverse();
            document.getElementById('arrayResult').textContent = `Reversed array: [${numbers.join(', ')}]`;
        }
        
        function addNumber() {
            const newNum = Math.floor(Math.random() * 100);
            numbers.push(newNum);
            document.getElementById('arrayResult').textContent = `Added ${newNum} to array: [${numbers.join(', ')}]`;
        }
        
        function filterEven() {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById('arrayResult').textContent = `Even numbers: [${evenNumbers.join(', ')}]`;
        }
        
        const quotes = [
            'Any application that can be written in JavaScript will eventually be written in JavaScript. - Jeff Atwood',
            'JavaScript is the duct tape of the Internet. - Charlie Campbell',
            'Code is like humor. When you have to explain it, it is bad. - Cory House',
            'First solve the problem. Then write the code. - John Johnson',
            'Simplicity is the soul of efficiency. - Austin Freeman',
            'Make it work, make it right, make it fast. - Kent Beck'
        ];
        
        function showQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById('quoteResult').textContent = quotes[randomIndex];
        }
        
        function changeBackground() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const newColor = `rgb(${r}, ${g}, ${b})`;
            
            document.body.style.background = newColor;
            document.getElementById('colorResult').textContent = `Background changed to ${newColor}`;
        }
        
        function restoreBackground() {
            document.body.style.background = '#0a0a0a';
            document.getElementById('colorResult').textContent = 'Background restored to default';
        }
        
        window.onload = function() {
            const demoBoxes = document.querySelectorAll('.demo-container');
            demoBoxes.forEach((box, index) => {
                box.style.opacity = '0';
                box.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    box.style.transition = 'all 0.6s ease';
                    box.style.opacity = '1';
                    box.style.transform = 'translateY(0)';
                }, index * 150);
            });
        };