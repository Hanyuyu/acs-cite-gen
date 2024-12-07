document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('citationForm');
    const clearButton = document.getElementById('clearForm');
    const copyButton = document.getElementById('copyButton');
    const downloadButton = document.getElementById('downloadButton');
    const resultContainer = document.querySelector('.result-container');
    const citationResult = document.getElementById('citationResult');

    // Format authors according to ACS style
    function formatAuthors(authors) {
        return authors
            .split(';')
            .map(author => author.trim())
            .filter(author => author)
            .join('; ');
    }

    // Generate ACS citation
    function generateCitation(data) {
        const authors = formatAuthors(data.authors);
        const title = data.title.trim();
        const journal = data.journal.trim();
        const year = data.year;
        const volume = data.volume.trim();
        const issue = data.issue.trim();
        const pages = data.pages.trim();
        const doi = data.doi.trim();

        let citation = `${authors} ${title}. `;
        citation += `${journal} `;
        citation += `${year}, `;
        citation += volume;
        
        if (issue) {
            citation += `(${issue})`;
        }
        
        citation += `, ${pages}`;
        
        if (doi) {
            citation += `. DOI: ${doi}`;
        }
        
        citation += '.';
        
        return citation;
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            authors: document.getElementById('authors').value,
            title: document.getElementById('title').value,
            journal: document.getElementById('journal').value,
            year: document.getElementById('year').value,
            volume: document.getElementById('volume').value,
            issue: document.getElementById('issue').value,
            pages: document.getElementById('pages').value,
            doi: document.getElementById('doi').value
        };

        const citation = generateCitation(formData);
        citationResult.textContent = citation;
        resultContainer.hidden = false;
    });

    // Clear form
    clearButton.addEventListener('click', () => {
        form.reset();
        resultContainer.hidden = true;
    });

    // Copy citation
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(citationResult.textContent);
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    });

    // Download citation
    downloadButton.addEventListener('click', () => {
        const citation = citationResult.textContent;
        const blob = new Blob([citation], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'acs-citation.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Form validation
    const requiredInputs = form.querySelectorAll('input[required]');
    requiredInputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
            e.preventDefault();
            input.classList.add('error');
        });

        input.addEventListener('input', () => {
            input.classList.remove('error');
        });
    });

    // Handle navigation
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    const footerLinks = document.querySelectorAll('.footer-content a');
    
    // Function to handle navigation
    function handleNavigation(e) {
        const href = e.target.getAttribute('href');
        if (href) {
            // Update active state
            navLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        }
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Add click event listeners to all footer links
    footerLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Set active state based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
