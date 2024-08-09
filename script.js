document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetId = tab.getAttribute('href').substring(1);
            
            tabContents.forEach(content => {
                content.style.display = 'none';
                if (content.id === targetId) {
                    content.style.display = 'block';
                }
            });
        });
    });

    // Optionally set the default active tab
    document.querySelector('nav ul li a[href="#body-systems"]').click();
});
