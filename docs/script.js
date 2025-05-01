// Function to set up file input and image preview
function setupImageInput(inputId, previewId) {
    const inputElement = document.getElementById(inputId);
    const previewImage = document.getElementById(previewId);

    inputElement.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';  // Show the image once loaded
            };
            reader.readAsDataURL(file);
        }
    });
}

// Initialize both file inputs
setupImageInput('thumbnailInput', 'thumbnailImage');
setupImageInput('avatarInput', 'avatarImage');