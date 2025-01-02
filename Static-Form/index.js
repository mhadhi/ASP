// Restrict special characters in the Name field
document.getElementById("txtName").addEventListener("input", function(event) {
    // Only allow letters and spaces by replacing any non-letter characters
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

document.getElementById("chkAdditionalInfo").addEventListener("change", function() {
    const additionalFields = document.getElementById("additionalInfoFields");
    additionalFields.style.display = this.checked ? "block" : "none";
});

// Real-time validation for each field
document.getElementById("frmSignUp").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Name field validation
    const name = document.getElementById("txtName");
    if (!name.value) {
        alert("Name is required.");
        name.focus();
        return;
    } 
    if (name.value.length < 2) {
        alert("Name must be at least 2 characters long.");
        name.focus();
        return;
    } 
    if (!name.value.trim() || name.value.trim().length < 2) {
        alert("Name must be at least 2 characters long and contain non-space characters.");
        name.focus();
        return;
    }

    // Email field validation
    const email = document.getElementById("txtEmail");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

    if (!email.value) {
        alert("Email is required.");
        email.focus();
        return;
    } else if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address (e.g., username@example.com).");
        email.focus();
        return;
    }

    // Phone number validation
    const phone = document.getElementById("txtPhone");
    const phonePattern = /^[1-9][0-9]{9}$/; // Starts with non-zero digit and is 10 digits long

    if (!phone.value) {
        alert("Phone number is required.");
        phone.focus();
        return;
    } else if (!phonePattern.test(phone.value)) {
        alert("Phone number must be a 10-digit number and cannot start with 0.");
        phone.focus();
        return;
    }

    // Date of Birth validation
    const dob = document.getElementById("txtDob");
    const selectedDate = new Date(dob.value);
    const today = new Date();
    const minAgeDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());

    if (!dob.value) {
        alert("Date of Birth is required.");
        dob.focus();
        return;
    } else if (selectedDate > today) {
        alert("Date of Birth cannot be in the future.");
        dob.focus();
        return;
    } else if (selectedDate > minAgeDate) {
        alert("You must be at least 16 years old.");
        dob.focus();
        return;
    }

    // Gender selection validation with focus on the first option
    const gender = document.getElementsByName("rdoGender");
    if (![...gender].some(g => g.checked)) {
        alert("Please select your gender.");
        gender[0].focus(); // Set focus to the first gender radio button
        return;
    }

    // Country selection validation
    const country = document.getElementById("ddlCountry");
    if (!country.value) {
        alert("Please select a country.");
        country.focus();
        return;
    }

    // Address validation
    const address = document.getElementById("txtAddress");
    if (!address.value) {
        alert("Address is required.");
        address.focus();
        return;
    } else if (!address.value.trim() || address.value.trim().length < 5) {
        alert("Address must be at least 5 characters long and contain non-space characters.");
        address.focus();
        return;
    }

    // Password validation
    const password = document.getElementById("txtPassword").value;

    if (!password) {
        alert("Password is required.");
        password.focus();
        return;
    } 
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        password.focus();
        return;
    }
    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        password.focus();
        return;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.")
        password.focus();
        return;
    }
    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one digit.");
        password.focus();
        return;
    }
    if (!/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password)) {
        alert("Password must contain at least one special character.");
        return;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById("txtConfirmPassword");
    if (!confirmPassword.value) {
        alert("Please confirm your password.");
        confirmPassword.focus();
        return;
    } else if (confirmPassword.value !== password) {
        alert("Passwords do not match.");
        confirmPassword.focus();
        return;
    }

    // Terms and Conditions validation
    const terms = document.getElementById("chkTerms");
    if (!terms.checked) {
        alert("You must agree to the terms and conditions.");
        terms.focus();
        return;
    }

    // Conditional validation for additional info
    if (document.getElementById("chkAdditionalInfo").checked) {
        const fatherName = document.getElementById("txtParentName");
        const occupation = document.getElementById("txtOccupation");
        const nameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces

        // Validate Parent's Name
        if (!fatherName.value) {
            alert("Father Name is required.");
            fatherName.focus();
            return;
        } else if (fatherName.value.length < 2) {
            alert("Father Name must be at least 2 characters long.");
            fatherName.focus();
            return;
        } else if (!nameRegex.test(fatherName.value)) {
            alert("Father Name must contain only alphabetic characters.");
            fatherName.focus();
            return;
        } else if (!fatherName.value.trim() || fatherName.value.trim().length < 2) {
            alert("Father Name must contain non-space characters.");
            fatherName.focus();
            return;
        }

        // Validate Occupation
        if (!occupation.value) {
            alert("Occupation is required.");
            occupation.focus();
            return;
        } else if (occupation.value.length < 3) {
            alert("Occupation must be at least 3 characters long.");
            occupation.focus();
            return;
        } else if (!nameRegex.test(occupation.value)) {
            alert("Occupation must contain only alphabetic characters.");
            occupation.focus();
            return;
        } else if (!occupation.value.trim() || occupation.value.trim().length < 2) {
            alert("Occupation must contain non-space characters.");
            occupation.focus();
            return;
        }
    }

    // If all validations pass
    alert("Form submitted successfully!");
    this.submit(); // Submit form if validation is successful
});