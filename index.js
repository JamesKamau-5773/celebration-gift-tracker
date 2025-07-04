// 1. Set up our main variables
    const BASE_URL = "https://challange-json-server.onrender.com/celebrations";

// This will store all our celebrations
    let celebrations = []; 

// 2. Get all the HTML elements we need
      const form = document.getElementById("celebrationForm");

      const celebrationList = document.getElementById("celebration-list");

      const searchInput = document.getElementById("searchInput");
 
 
    // function initApp() {

    //   if (!celebrationsForm || !searchInput) {

    //   console.error("Couldn't find form or search input!");

    //   return; 
    // }
  
  // }
  // initApp();
    
// 3. When the page loads, load the celebrations
    window.addEventListener("load", function() {
      loadCelebrations();
    
  
    // Set up our event listeners
    form.addEventListener("submit", function(e){
      e.preventDefault();
      
      addCelebration(e);
    });
// searchBox.addEventListener("input", searchCelebrations);
    });


// 4. Load celebrations from the server
    function loadCelebrations() {
      fetch(BASE_URL)
        .then(response => response.json())

        .then(data => {
          celebrations = data;

          showAllCelebrations(celebrations);
        })

        .catch(error => {
          console.log("Oops, something went wrong:", error);
        });
    }
    

// 5. Function to display all celebrations
    function showAllCelebrations(celebrationsToShow) {

     // Clear the current list
      celebrationList.innerHTML = "";

    // If there are no celebrations, show a message
      if (celebrationsToShow.length === 0) {
        
        celebrationList.innerHTML = `
          
        <div class="empty-message">

            <p>No celebrations found</p>

            <p>Add your first celebration!</p>

          </div>
        `;
        return;
      }

  
   // Add each celebration to the list
      celebrationsToShow.forEach(celebration => {
        
        const celebrationItem = createCelebrationItem(celebration);
        
        celebrationList.appendChild(celebrationItem);
      });
    }

// 6. Function to create HTML for one celebration
    function createCelebrationItem(celebration) {
    
      const item = document.createElement("li");

  
  // Check if this celebration is coming up soon (within 7 days)
    const today = new Date();
    
    const eventDate = new Date(celebration.celebrationDate);
    
  // Make sure we only compare dates (not times)
    today.setHours(0, 0, 0, 0);
    
    eventDate.setHours(0, 0, 0, 0);
  
  // Calculate days difference
    const daysDifference = Math.floor((eventDate - today) / (1000 * 60 * 60 * 24));
  
  // If it's coming up in the next week, highlight it
    if (daysDifference >= 0 && daysDifference <= 7) {
    
      item.classList.add("upcoming");
  }

  // Format the date nicely
  const niceDate = eventDate.toLocaleDateString("en-US", {

    year: "numeric",

    month: "long",

    day: "numeric"
  });

  // Create the HTML for this celebration
  item.innerHTML = `
    <div class="celebration-details">
    
      <h3>${celebration.name}</h3>

      <p><strong>Date:</strong> ${niceDate}</p>

      <p><strong>Where:</strong> ${celebration.location}</p>

      <p><strong>Gift:</strong> ${celebration.gift} ($${celebration.cost})</p>

      <p><strong>Delivery:</strong> ${celebration.delivery}</p>

    </div>

    <button class="delete-btn" data-id="${celebration.id}">Delete</button>
  `;

  // Add click event to the delete button
  const deleteBtn = item.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function() {
    
    deleteCelebration(celebration.id);
  });

  return item;
}

// 7. Function to add a new celebration
  async function addCelebration(event) {
  event.preventDefault();

  // Get form values
  const getValue = (id) => document.getElementById(id)?.value;

  const values = {
    name: getValue('name'),

    celebrationDate: getValue('celebrationDate'),
    
    location: getValue('location'),

    gift: getValue('gift'),

    cost: parseFloat(getValue('cost')) || 0,

    delivery: getValue('delivery'),

    status: getValue('status'),

    notes: getValue('notes')
  };

  

  try {
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');

    submitBtn.disabled = true;

    submitBtn.innerHTML = '<span class="loading-spinner"></span> Adding...';

    // POST to server
    const response = await fetch(BASE_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(values)
    });

    if (!response.ok) throw new Error('Failed to save celebration');

    const newCelebration = await response.json();

    // Update local state
    celebrations.push(newCelebration);

    showAllCelebrations(celebrations);

    form.reset();

    // Show success notification
    showNotification('Celebration added successfully!', 'success');

  } catch (error) {
    console.error("Error adding celebration:", error);

    showNotification('Failed to add celebration', 'error');

  } finally {
    // Reset button state
    const submitBtn = event.target.querySelector('button[type="submit"]');

    submitBtn.disabled = false;

    submitBtn.textContent = 'Add celebration';
  }
}

// Helper function to show notifications
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.textContent = message;
  
  document.getElementById('notificationContent').appendChild(notification);

  setTimeout(() => notification.remove(), 3000);
}
  

// 8. Function to delete a celebration
  function deleteCelebration(id) {
  
    // Send delete request to server
    fetch(`${BASE_URL}/${id}`, {
  
      method: "DELETE"
    })
    .then(() => {
    
      // Remove from our local list
      celebrations = celebrations.filter(celebration => celebration.id !== id);
    
      showAllCelebrations(celebrations);
    })

    .catch(error => {
    
      console.log("Error deleting celebration:", error);
    });
}

// 9. Function to search celebrations
  function searchCelebrations() {
  
    const searchText = searchBox.value.toLowerCase();
  
    const filtered = celebrations.filter(celebration => {
    
      return celebration.name.toLowerCase().includes(searchText);
  });
  
  showAllCelebrations(filtered);
}

