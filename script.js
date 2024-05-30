function createTable() {
    // Get the number of rows from the user
    const rowCount = parseInt(prompt('Input number of rows'), 10);
    // Get the number of columns from the user
    const colCount = parseInt(prompt('Input number of columns'), 10);
    
    // Get the table element by its id
    const table = document.getElementById('myTable');
    
    // Clear any existing content in the table
    table.innerHTML = '';

    // Loop to create rows
    for (let i = 0; i < rowCount; i++) {
        // Create a table row
        const row = document.createElement('tr');

        // Loop to create columns
        for (let j = 0; j < colCount; j++) {
            // Create a table cell
            const cell = document.createElement('td');
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
}

// Add event listener to the button to create the table
document.getElementById('createTableButton').addEventListener('click', createTable);
