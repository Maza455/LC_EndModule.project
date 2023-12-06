// Products Functionality
function searchBooks() {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery));

  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  filteredBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Edition: ${book.edition}</p>
      <p>Year: ${book.year}</p>
      <p>Price: $${book.price}</p>
    `;
    searchResults.appendChild(bookDiv);
  });
}

// Admin functionality
let books = JSON.parse(localStorage.getItem("Products")) ?
    JSON.parse(localStorage.getItem("Products")) :
    [{
            image: "https://i.postimg.cc/L4C163mN/91h-Uer84-Pp-L-AC-UF1000-1000-QL80.jpg",
            title: "JavaScript",
            author: "David, Flanagan",
            edition: "Penguin",
            year: 1914,
            price: 399.99,
        },
        {
            image: "https://i.postimg.cc/JzLTxm9s/space-black-apple-watch-over-black-iphone-x.jpg",
            title: "space-black-apple-watch-over-black-iphone-x",
            author: "iStore",
            edition: "Penguin",
            year: 2015,
            price: 11159.99,
        },
        {
            image: "https://i.postimg.cc/dQ7dtjvq/AnnaK.jpg",
            title: "Anna Karenina",
            author: "Tolstoy, Leo",
            edition: "Penguin",
            year: 1875,
            price: 119.99,
        },
        {
            image: "https://i.postimg.cc/Vvz7H211/images-8.jpg",
            title: "Mrs. Dalloway",
            author: "Pro, Iphone",
            edition: "Harcourt Brace",
            year: 1925,
            price: 7249.99,
        },
        {
            image: "https://i.postimg.cc/CLg1TGxr/hours.jpg",
            title: "The Hours",
            author: "Cunnningham, Michael",
            edition: "Harcourt Brace",
            year: 1999,
            price: 220.00,
        },
        {
            image: "https://i.postimg.cc/SRK694kX/download-8.jpg",
            title: "Huckleberry Finn",
            author: "Twain, Mark",
            edition: "Penguin",
            year: 1865,
            price: 70.00,
        },
        {
            image: "https://i.postimg.cc/BbNRzf60/house.jpg",
            title: "Bleak House",
            author: "Dickens, Charles",
            edition: "Random House",
            year: 1870,
            price: 70.00,
        },
        {
            image: "https://i.postimg.cc/d0mrS30k/Apple-September-Event-2021-Wallpapers.jpg",
            title: "Tom Sawyer",
            author: "Twain, Mark",
            edition: "Random House",
            year: 1862,
            price: 85.00,
        },
        {
            image: "https://i.postimg.cc/GhVXmm6f/RoomOne.jpg",
            title: "A Room of One's Own",
            author: "Woolf, Virginia",
            edition: "Penguin",
            year: 1922,
            price: 329.99,
        },
        {
            image: "https://i.postimg.cc/8k3RhnwJ/Harry-Potter.jpg",
            title: "Harry Potter",
            author: "Rowling, J.K.",
            edition: "Harcourt Brace",
            year: 2000,
            price: 260.00,
        },
        {
            image: "https://i.postimg.cc/BZRNd8gt/Hundred.jpg",
            title: "One Hundred Years of Solitude",
            author: "Marquez",
            edition: "Harper Perennial",
            year: 1967,
            price: 170.00,
        },
        {
            image: "https://i.postimg.cc/y63yX1HK/Hamlet.jpg",
            title: "Hamlet, Prince of Denmark",
            author: "Shakespeare",
            edition: "Signet Classics",
            year: 1603,
            price: 130.00,
        },
        {
            image: "https://i.postimg.cc/nckjqgCZ/Lord-Rings.jpg",
            title: "Lord of the Rings",
            author: "Tolkien, J.R.",
            edition: "Penguin",
            year: 1937,
            price: 741.00,
        },
        {
            image: "https://i.postimg.cc/9MH6vn80/Classic-Books-about-Java-Script-Eloquent-Java-Script-1024x808.jpg",
            title: "Eloquent JavaScript",
            author: "Marijin Heverbeke",
            edition: "Penguin",
            year: 2006,
            price: 879.00,
        },
    ];

let checkOut = JSON.parse(localStorage.getItem("cart")) ?
    JSON.parse(localStorage.getItem("cart")) :
    [];


// READ BOOKS
function readBooks(items) {
    document.querySelector("#products").innerHTML = "";
    items.forEach((book, position) => {
        document.querySelector("#products").innerHTML += `
        
        <div class="card">
          <Image src="${book.image}" class="card-Image-top" alt="${book.title}">
          <div class="card-body">
            <h4 class="card-title">${book.title}</h4>
            <p><strong> ${book.title} </strong></p>
            <p> by ${book.author} - ${book.year} </p>
            <p class="card-text">R<strong> ${parseInt(book.price)}</strong></p>
            <div d-flex-nowrap>
            <input type="number" value=1 class="cart" min=1 id="addToCart${position}">
            <button type="button" class="btn btn-secondary addToCart"  onclick="addToCart( ${position} )"><i class='fas fa-cart-plus'></i>
            <p class="write">Add to Cart</p>
            </button>
            
            <!-- Modal Class -->
            <div
            class="modal fade"
            id="editBook${position}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit ${book.title}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="editTitle${position}" class="form-label">Title</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editTitle${position}"
                      id="editTitle${position}"
                      value="${book.title}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editAuthor${position}" class="form-label">Author</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editAuthor${position}"
                      id="editAuthor${position}"
                      value="${book.author}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editEdition${position}" class="form-label">Edition</label>
                    <select
                      class="form-select"
                      name="editEdition${position}"
                      id="editEdition${position}"
                    >
                    <option value="Penguin">Penguin</option>
                    <option value="Harcourt Brace">Harcourt Brace</option>
                    <option value="Random House">Random House</option>
                    <option value="Harper Perennial">Harper Perennial</option>
                    <option value="Signet Classics">Signet Classics</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="editYear${position}" class="form-label">Year Published</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editYear${position}"
                      id="editYear${position}"
                      value="${book.year}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editPrice${position}" class="form-label">Price</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editPrice${position}"
                      id="editPrice${position}"
                      value="${parseInt(book.price)}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editImage${position}" class="form-label">Image URL</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editImage${position}"
                      id="editImage${position}"
                      value="${book.img}"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    onclick="updateBook(${position})"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
  `;
    });
}

readBooks(books);

// CART
function addToCart(position) {
    let quantity = document.querySelector(`#addToCart${position}`).value;
    checkOut.push({
        quantity,
        ...books[position]
    });
    //cart.push({...books[position]});
    localStorage.setItem("cart", JSON.stringify(checkOut));
    console.log(checkOut);
}


// SORT
function sortEdition() {
    let edtn = document.querySelector("#sortEdition").value;

    if (edtn == "All") {
        return readBooks(books);
    }

    let foundBooks = books.filter(book => {
        return book.edtn == edtn;
    });

    readBooks(foundBooks);
    console.log(foundBooks);
}


// SORT BY PRICE

function sortPrice() {
    let direction = document.querySelector("#sortPrice").value;

    let sortedBooks = books.sort((a, b) => a.price - b.price);

    console.log(sortedBooks);

    if (direction == "descending") sortedBooks.reverse();
    readBooks(sortedBooks);
}