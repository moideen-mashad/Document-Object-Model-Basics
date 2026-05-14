// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select elements from the DOM
    const demoArea = document.getElementById('demo-area');
    const addBtn = document.getElementById('add-btn');
    const highlightBtn = document.getElementById('highlight-btn');
    const clearBtn = document.getElementById('clear-btn');
    
    let nodeCount = 2; // Starting with 2 original nodes

    // 1. CREATE AND APPEND NEW NODES
    addBtn.addEventListener('click', () => {
        nodeCount++;
        
        // Step 1: Create a new <p> element (avoiding divitis!)
        const newNode = document.createElement('p');
        
        // Step 2: Add properties to it
        newNode.className = 'demo-item';
        newNode.textContent = `New Node ${nodeCount} (Created via JS)`;
        
        // Step 3: Append it to the DOM (saving the file into the folder)
        demoArea.appendChild(newNode);
    });

    // 2. TRAVERSE AND MODIFY NODES
    highlightBtn.addEventListener('click', () => {
        // Select all elements with the class 'demo-item'
        const items = document.querySelectorAll('.demo-item');
        
        // Loop through them and toggle a highlight class
        items.forEach(item => {
            item.classList.toggle('highlight');
        });
        
        // Update the text to show we are modifying the DOM
        if (items.length > 0 && items[0].classList.contains('highlight')) {
            highlightBtn.textContent = "Remove Highlight";
        } else {
            highlightBtn.textContent = "Highlight All Nodes";
        }
    });

    // 3. REMOVE NODES
    clearBtn.addEventListener('click', () => {
        // Find all elements to delete
        const items = document.querySelectorAll('.demo-item');
        
        // We will leave the original two nodes and only delete the new ones
        if (items.length > 2) {
            for (let i = 2; i < items.length; i++) {
                // Using .remove() to delete a node from the DOM tree
                items[i].remove();
            }
        }
        
        // Reset count
        nodeCount = 2;
        
        // Remove highlight if it exists
        items.forEach(item => {
            item.classList.remove('highlight');
        });
        highlightBtn.textContent = "Highlight All Nodes";
    });
});
