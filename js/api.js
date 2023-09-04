$.ajax({
    method: "GET",
    url: `http://localhost:1000/GetProductsJSON`,
    async:false,
    success: (data) => setHTML(data),
    error: (error) => {},
  });

  function setHTML(data){
    var listOg = $('#og');
    var listPr = $('.pr');
      for(var i = 0; i < 5; i++){
        listOg.append(addToListOg(data[i].name, data[i].price));
        listPr.append(addToListPr(data[i].name, data[i].price));
    }
    /*data.forEach(element => {
      list.append(addToList(element.name, element.price));
    });*/
  }

  function addToListOg(name, price){
    return ` <div class='box'>
                  <span class='discount'>-50%</span>
                  <div class='icons'>
                      <a href="#" class="fas fa-heart"></a>
                      <a href="#" class="fas fa-share"></a>
                      <a href="#" class="fas fa-eye"></a>
                  </div>
                  <img src='../images/product-1.png' alt="">
                  <h3>${name}</h3>
                  <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="price"> ${price} <span> $13.20 </span> </div>
                  <div class='quantity'>
                      <span>Količina : </span>
                      <input type="number" min="1" max="1000" value="1">
                      <span> /kg </span>
                  </div>
                  <button class="btn buynow-btn" data-name='${name}' data-price='${price}'>Dodaj u korpu</button>
              </div>`
  }

  function addToListPr(name, price){
    return ` <div class="box">
                  <div class="icons">
                      <a href="#" class="fas fa-heart"></a>
                      <a href="#" class="fas fa-share"></a>
                      <a href="#" class="fas fa-eye"></a>
                  </div>
                  <img src="../images/product-1.png" alt="">
                  <h3>${name}</h3>
                  <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="price"> ${price} </div>
                  <div class="quantity">
                      <span>Količina : </span>
                      <input type="number" min="1" max="1000" value="1">
                      <span> /kg </span>
                  </div>
                  <button class="btn buynow-btn" data-name="${name}" data-price="${price}">Dodaj u korpu</button>
              </div>`
  }


  /*
  
  $.ajax({
    method: "GET",
    url: http://localhost:8080/v1/predmet/${naziv},
    success: (data) => console.log(data),
    error: (error) => {
      handleError(JSON.parse(error.responseText));
    },
  });
  



$.ajax({
    method: "POST",
    contentType: "application/json",
    url: http://localhost:8080/v1/predmet,
    data: JSON.stringify({
      naziv: $("#nazivInput").val() ?? "",
    }),
    success: () => dodajAktivnost(),
    error: (error) => {
      handleError(JSON.parse(error.responseText));
    },
  });
*/