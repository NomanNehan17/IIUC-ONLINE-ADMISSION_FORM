$(document).ready(function () {
    $('#applicationForm').submit(function (event) {
        event.preventDefault();

        // Validate the form fields here
        if (!validateForm()) {
            return; // Don't proceed if validation fails
        }

        // Handle document uploads
        const transcriptFile = $('#transcript')[0].files[0];
        const photoFile = $('#photo')[0].files[0];

        // You can perform further actions with the uploaded files here
        if (transcriptFile) {
            console.log('Transcript file uploaded:', transcriptFile.name);
        }
        if (photoFile) {
            console.log('Passport-sized photo uploaded:', photoFile.name);
        }

        // Submit the form or perform additional actions
        // based on your specific requirements
        submitForm();
    });

    // Validate the form fields
    function validateForm() {
        // You can add your form validation logic here

        // Example validation: Check if Applicant's Name is not empty
        const fullName = $('#fullName').val();
        if (!fullName) {
            alert('Applicant\'s Name is required.');
            return false;
        }

        // Validate Program/Subject
        const programSubject = $('#Program/Subject').val();
        if (!programSubject) {
            alert('Program/Subject is required.');
            return false;
        }

        // Validate Semester
        const semester = $('#semester').val();
        if (!semester) {
            alert('Semester is required.');
            return false;
        }

        // Validate Transport
        const transport = $('#transport').val();
        if (!transport) {
            alert('Transport is required.');
            return false;
        }

        // Add more validation rules as needed

        return true; // Return true if all validations pass
    }

    // Submit the form or perform additional actions
    function submitForm() {
        // You can submit the form or perform other actions here
        // Example: $('#applicationForm').submit();

        // Show the success message
        $('#successMessage').show();
    }
});
