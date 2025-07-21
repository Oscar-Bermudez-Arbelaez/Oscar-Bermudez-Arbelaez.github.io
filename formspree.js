/* formspree.js */
export function sendFormData(formData) {
    return fetch('https://formspree.io/f/{your_form_id}', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json());
}