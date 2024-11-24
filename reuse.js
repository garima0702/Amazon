document.getElementById('repairForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const repairDetailsInput = document.getElementById('repairDetails');
    const message = document.getElementById('message');
    const productId = document.getElementById('product_id').value; // Get value
    const userId = document.getElementById('user_id').value; // Get value
    const repairDetails = repairDetailsInput.value;

        // Send the request to the backend using fetch
    try{
        const response = await fetch('http://localhost:5000/returns/repair', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId,
                userId,
                repairDetails,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            

            // Redirect to the submission success page after a short delay
            setTimeout(() => {
                window.location.href = 'success.html';
            }, 500); // Redirect after 2 seconds
        } else {
            throw new Error(data.message || 'Failed to submit repair request.');
        }
    } catch (error) {
        message.textContent = error.message;
        message.style.color = 'red';
    }
});