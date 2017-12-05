function toggleAddNew() {
    var addNewBox = document.getElementById('addnew');
    if (addNewBox.style.display == "block") {
        addNewBox.style.display = "none";
    }
    else {
        addNewBox.style.display = "block";
        document.getElementById('itemTitle').value = '';
        document.getElementById('itemId').value = '';
        document.getElementById('itemDescription').value = '';
        document.getElementById('itemQuantity').value = '';
        document.getElementById('itemPrice').value = '';
    }
}

function toggleEdit() {
    var addNewBox = document.getElementById('addnew');
    if (addNewBox.style.display == "block") {
        addNewBox.style.display = "none";
    }
    else {
        addNewBox.style.display = "block";
    }
}

function showCart() {
    var cartBox = document.getElementById('cart');
    var addNewBox = document.getElementById('addnew');

    if (cartBox.style.display == "none" && addNewBox.style.display == "block") {
        cartBox.style.display = "block";
        addNewBox.style.display = "none";
    }
    else if (cartBox.style.display == "block") {
        cartBox.style.display = "none";
    }
    else {
        cartBox.style.display = "block";
    }
}

// Saves Item in locastorage and reload Page
function saveLocalStorage() {
    var id = document.getElementById('itemId').value || localStorage.length + 1;

    var title = document.getElementById('itemTitle').value; // min 3 max 250
    if (title.length < 3 || title.length > 250) {
        alert('Title Must me between 3 and 250 charachters');
        return;
    }

    var description = document.getElementById('itemDescription').value; // min 5 max 500
    if (description.length < 5 || description.length > 500) {
        alert('Description Must me between 5 and 500 charachters');
        return;
    }

    var image = document.getElementById('itemImage').value; // .jpeg .png
    var imageRegex = /.+\.(jpg|png|jpeg)$/ig;
    if (imageRegex.test(image) !== true) {
        alert('Please eenter valid image');
        return;
    }

    var quantity = document.getElementById('itemQuantity').value; // min 1
    var price = document.getElementById('itemPrice').value; // min 1

    var object = { title: title, description: description, image: image, quantity: quantity, price: price };

    localStorage.setItem(id, JSON.stringify(object));

    document.getElementById('itemTitle').value = '';
    document.getElementById('itemDescription').value = '';
    document.getElementById('itemImage').value = '';
    document.getElementById('itemQuantity').value = '';
    document.getElementById('itemPrice').value = '';

    location.reload();
}

// Load and display items from localStorage at start
(function () {
    var itemsLength = localStorage.length;

    var itemsSection = document.getElementById('itemsSection');
    var frag = document.createDocumentFragment();

    var article = document.createElement('article');
    var image = document.createElement('img');
    var titleParagraph = document.createElement('p');
    var idParagraph = document.createElement('p');
    var descriptionParagraph = document.createElement('p');
    var quantityParagraph = document.createElement('p');
    var priceParagraph = document.createElement('p');
    var addButton = document.createElement('button');
    var editButton = document.createElement('button');

    for (var i = 1; i <= itemsLength; i += 1) {
        var jsonItem = localStorage.getItem(i);
        //localStorage.removeItem(i);
        var item = JSON.parse(jsonItem);

        image.style.width = '200px';
        image.style.height = '200px';
        image.style.border = '1px solid black';
        image.style.borderRadius = '15px';
        image.src = './img/' + item.image.slice(12);

        titleParagraph.innerText = 'Title: ' + item.title;

        idParagraph.innerText = 'ID: ' + i;

        descriptionParagraph.innerText = 'Description: ' + item.description;

        quantityParagraph.innerText = 'Quantity: ' + item.quantity;
        priceParagraph.innerText = 'Price: ' + item.price;

        addButton.innerText = 'Add to your cart';
        addButton.className = 'basic-button green-button addto-cart-btn';

        editButton.innerText = 'Edit this product';
        editButton.className = 'basic-button red-button';

        article.appendChild(image);
        article.appendChild(titleParagraph);
        article.appendChild(idParagraph);
        article.appendChild(descriptionParagraph);
        article.appendChild(priceParagraph);
        article.appendChild(quantityParagraph);
        article.appendChild(addButton);
        article.appendChild(editButton);

        frag.appendChild(article.cloneNode(true));
    }

    itemsSection.appendChild(frag);
})();

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

// Load Edit item with its item properties
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'red-button')) {
        document.getElementById('itemTitle').value = e.target.parentElement.childNodes[1].innerText.slice(7);
        document.getElementById('itemId').value = e.target.parentElement.childNodes[2].innerText.slice(4);
        document.getElementById('itemDescription').value = e.target.parentElement.childNodes[3].innerText.slice(13);
        document.getElementById('itemQuantity').value = e.target.parentElement.childNodes[5].innerText.slice(10);
        document.getElementById('itemPrice').value = e.target.parentElement.childNodes[4].innerText.slice(7);

        toggleEdit();
    }
}, false);

// Add to cart Event
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'addto-cart-btn')) {
        var title = e.target.parentElement.childNodes[1].innerText.slice(7);
        var id = e.target.parentElement.childNodes[2].innerText.slice(4);
        var quantity = e.target.parentElement.childNodes[5].innerText.slice(10);
        var price = e.target.parentElement.childNodes[4].innerText.slice(7);
        var rawImage = e.target.parentElement.childNodes[0].src.slice(0);
        var n = rawImage.lastIndexOf("/");
        rawImage = './img/' + rawImage.slice(n + 1, rawImage.length);

        var jsonItem = localStorage.getItem(id);
        var item = JSON.parse(jsonItem);

        var itemDiv = document.createElement('div');
        itemDiv.style.borderBottom = '1px solid red';

        var image = document.createElement('img');
        image.style.width = '50px';
        image.style.height = '50px';
        image.style.border = '1px solid black';
        image.style.borderRadius = '15px';
        image.style.display = 'block';
        image.style.float = 'left';
        image.src = rawImage;

        var titleParagraph = document.createElement('p');
        titleParagraph.innerText = 'Item title: ' + title;
        titleParagraph.style.marginLeft = '52px';

        var quantityInput = document.createElement("input");
        var quantityLabel = document.createElement("label");
        quantityLabel.innerText = 'quantity: ';

        quantityInput.setAttribute("type", "number");
        quantityInput.setAttribute("min", 0);
        quantityInput.setAttribute("max", 99);
        quantityInput.setAttribute("class", 'cart-quantity');
        quantityInput.value = 1;

        quantityLabel.appendChild(quantityInput);

        var priceParagraph = document.createElement('p');
        priceParagraph.innerText = 'price: ' + price;
        priceParagraph.style.marginLeft = '52px';

        var subtotalParagraph = document.createElement('p');
        subtotalParagraph.innerText = 'subtotal: ' + price;
        subtotalParagraph.style.marginLeft = '52px';
        subtotalParagraph.className = 'sub-total-paragraph';

        itemDiv.appendChild(image);
        itemDiv.appendChild(titleParagraph);
        itemDiv.appendChild(quantityLabel);
        itemDiv.appendChild(priceParagraph);
        itemDiv.appendChild(subtotalParagraph);

        addToCart(itemDiv);
        alert('Added To your cart');
    }
}, false);

function addToCart(item) {
    document.getElementById('cart').prepend(item);
}

// Change Subtotal in Cart
document.addEventListener('input', function (e) {
    if (e.target.className === 'cart-quantity') {
        var newSubTotal = ((+e.target.value) * +((e.target.parentNode.nextSibling.innerText).slice(7)));
        e.target.parentNode.nextSibling.nextSibling.innerText = 'subtotal: ' + newSubTotal;
    }
    else {
        return;
    }
}, false);

// Delete item from Cart if quantity is 0
document.addEventListener('input', function (e) {
    if (e.target.className === 'cart-quantity' && e.target.value === '0') {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
    else {
        return;
    }
}, false);

function calculateTotalPrice() {
    var subtotals = document.getElementsByClassName('sub-total-paragraph');
    var totalPrice = 0;

    if (subtotals.length === 0) {
        alert(`Please select at least one item from us and then confirm`);
        return;
    }

    for (var i = 0; i < subtotals.length; i++) {
        var currentSubTotal = +subtotals[i].innerText.slice(10);
        totalPrice += currentSubTotal;
    }
    
    // Adding  shipping 5% to total
    totalPrice = totalPrice + (totalPrice / 20); // or 0,05

    alert(`SUCCESS, YOUR ORDER IS RECIVED, IT IS ${totalPrice} $ including 5% Shipping TAX`);
    location.reload();
}