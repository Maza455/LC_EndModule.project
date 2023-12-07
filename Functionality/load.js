// Loading page functionality
// Loading page functionality
document.addEventListener('DOMContentLoaded', function () {
    load();

    function load() {
        setTimeout(() => {
            document.querySelector('.loader').classList.add('loaded');
        }, 3000);
    }
});