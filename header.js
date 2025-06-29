const headerTemplate3 = document.createElement('template');

headerTemplate3.innerHTML = `
<style>
	.header {
		display: flex;
	}
	
	.menu {
		max-width: 20px;
		border: 2px solid black;
		background-color: white;
		border-radius: 4px;
		margin: 5px 10px;
		padding: 0 5px;
		cursor: pointer;
	}
	
	h1 {
		font-family: monospace;
		font-size: 12px;
		text-align: left;
		display: flex;
		align-items: center;
		padding: 5px 0;
		margin: 0px 0px;
		max-width: 50rem;
		width: 100%;
	}	
	
	h1 a {
		text-decoration: none;
		color: white;
		background-color: #555;
		border-radius: 4px;
		padding: 6px 6px;
	}
	
	.scroll-box {
    position: fixed; /* Change to fixed */
    top: 35%; /* Adjust to desired vertical placement */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center horizontally */
    width: 80%;
    max-width: 800px;
    height: 250px;
    border: 3px solid black;
    padding: 10px;
    background-color: #f9f9f9;
    overflow-y: scroll;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    display: none;
    z-index: 1000;
  }

  .scroll-box.visible {
    display: block;
  }

	.scroll-box .close-message {
    font-family: monospace;
    font-size: 8px;
    color: grey;
    margin-bottom: 10px;
    text-align: center;
    font-style: italic;
    }

  .scroll-box .search-box {
    width: 90%;
    padding: 5px;
    margin-bottom: 10px;
    font-family: monospace;
		font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    }

  .scroll-box ol {
    font-family: monospace;
		   margin: 0; /* Remove extra margins */
    padding: 0; /* Remove extra padding */
   		list-style-position: outside;
		   padding-left: 3em;
	   	color: red;
    }

	.scroll-box ol a{
		font-family: monospace;
		text-decoration: underline #ccc dotted;
		text-underline-offset: 3px;
		color: black;
	}

.scroll-box li {
		   font-size: 0.9em;
    padding-bottom: 10px;
    }

ol li {
    text-align: left;
}

.li2 {
    font-size: 12px;
    padding: 5px 0 5px 20px; /* Remove extra padding */
}

  #overlay {
    position: fixed; /* Ensure it covers the viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    z-index: 999; /* One level below the scroll box */
    }

  #overlay.visible {
    display: block;
    }
	
  .hrnone {
    border: 1px solid #f9f9f9;
  }

	@media (max-width: 600px) {
		h1 {
			width: 100%;
		}
		.scroll-box {
			height: 85vh;
			width: 70%;
			top: 45px;
			left: 0;
			transform: none;
			margin: 0 0;
		}
	}
</style>

<div class="header">
  <img src="menu.svg" class="menu" alt="Menu Icon"></img>
  <h1><a href="index.html">Tajwid by Bazli</a></h1>
</div>
<div id="overlay"></div>
<div class="scroll-box" id="scroll-box">
  <div class="close-message">Click outside this box to close it</div>
  <input
    type="text"
    class="search-box"
    id="search-box"
    placeholder="Search..."
    aria-label="Search list items"
  />
  <ol id="list">
    <li><a href="index.html">About</a></li>
    <li><a href="008-tahriri.html">My Tahriri</a></li>
	<hr><b>Topik</b><hr class="hrnone">
	  <li><a href="006-nabr.html">An-nabr</a></li>
    <li><a href="007-hafs.html">Bacaan khusus Hafs-Syatibi</a></li>
    <li><a>Mad</a>
      <ul class="li2">
          <li><a href="003-mad01.html">Tahap mad far'i</a></li>
      </ul>  
    </li>
    <li><a href="002-ntm.html">Nun, tanwin, mim</a></li>
    <li><a href="004-sakinain.html">Pertemuan dua sukun</a></li>
    <li><a href="005-tafnis.html">Tafkhim nisbi</a></li>
    <li><a href="009-waqaf.html">Waqaf</a></li>
    <li><a href="001-wj.html">Waqaf Jibril</a></li>
  <hr><b>Nota tambahan</b><hr class="hrnone">
    <li><a href="https://bazliamin90.github.io/bukutajwid" target="_blank">Buku tajwid</a></li>
  </ol>
<br><br>
</div>
`;

class Header3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate3.content.cloneNode(true));

    const menu = shadowRoot.querySelector('.menu');
    const scrollBox = shadowRoot.querySelector('#scroll-box');
    const overlay = shadowRoot.querySelector('#overlay');
    const searchBox = shadowRoot.querySelector('#search-box');
    const list = shadowRoot.querySelector('#list');

    // Toggle scroll box visibility
    menu.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleScrollBox(scrollBox, overlay);
    });

    // Close scroll box when clicking outside
    document.addEventListener('click', function (event) {
      if (
        scrollBox.classList.contains('visible') &&
        !scrollBox.contains(event.target) &&
        !event.target.matches('.menu')
      ) {
        hideScrollBox(scrollBox, overlay);
      }
    });

    // Prevent clicks inside the scroll box from closing it
    scrollBox.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    function toggleScrollBox(scrollBox, overlay) {
      if (scrollBox.classList.contains('visible')) {
        hideScrollBox(scrollBox, overlay);
      } else {
        showScrollBox(scrollBox, overlay);
      }
    }
    
    function showScrollBox(scrollBox, overlay) {
      scrollBox.classList.add('visible');
      overlay.classList.add('visible');
      
      // Prevent scrolling but keep scrollbar visible
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    
    function hideScrollBox(scrollBox, overlay) {
      scrollBox.classList.remove('visible');
      overlay.classList.remove('visible');
      
      // Re-enable scrolling and reset padding
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }    

    // Add search functionality
    searchBox.addEventListener('input', function () {
      const filter = searchBox.value.toLowerCase();
      const items = list.querySelectorAll('li');
      const headings = list.querySelectorAll('b'); // Select all <b> elements
      const horizontalRules = list.querySelectorAll('hr'); // Select all <hr> elements
    
      let anyVisible = false;
    
      // Filter list items
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
      });
    
      // If the search is cleared, show all <b> and <hr> elements
      if (!filter) {
        headings.forEach((heading) => {
          heading.style.display = ''; // Show all <b> headings
        });
        horizontalRules.forEach((hr) => {
          hr.style.display = ''; // Show all <hr> elements
        });
        return;
      }
    
      // Hide or show <b> elements based on visibility of their child list items
      headings.forEach((heading) => {
        const listItems = heading.nextElementSibling
          ? heading.nextElementSibling.querySelectorAll('li')
          : [];
        let anyVisible = false;
    
        listItems.forEach((item) => {
          if (item.style.display !== 'none') {
            anyVisible = true;
          }
        });
    
        // If no list items are visible under this heading, hide the heading
        heading.style.display = anyVisible ? '' : 'none';
      });
    
      // Hide or show <hr> elements based on visibility of their adjacent list items
      horizontalRules.forEach((hr) => {
        const nextSibling = hr.nextElementSibling;
        if (nextSibling && nextSibling.style.display !== 'none') {
          hr.style.display = ''; // Show <hr> if the next sibling is visible
        } else {
          hr.style.display = 'none'; // Hide <hr> if no visible next sibling
        }
      });
    });    
  }
}

// Show and hide scroll box utility functions
function toggleScrollBox(scrollBox, overlay) {
  if (scrollBox.classList.contains('visible')) {
    hideScrollBox(scrollBox, overlay);
  } else {
    showScrollBox(scrollBox, overlay);
  }
}

function showScrollBox(scrollBox, overlay) {
  scrollBox.classList.add('visible');
  overlay.classList.add('visible');
}

function hideScrollBox(scrollBox, overlay) {
  scrollBox.classList.remove('visible');
  overlay.classList.remove('visible');
}

customElements.define('header3-component', Header3);