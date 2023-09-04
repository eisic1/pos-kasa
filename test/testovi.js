let assert = chai.assert;
var expect = chai.expect;

describe('#inkrement', function() {
	it('treba vratiti minimalnu vrijednost kolicine', function() {
		assert.equal(pov(), 1);
	});
});

describe('#dekrement', function() {
	it('treba vratiti minimalnu vrijednost kolicine', function() {
		assert.equal(pov(), 1);
	});
});

describe('#Testiranje korpe', function() {
	it('Provjera dodavanja elemenata u korpu', function() {
		shoppingCart.addItemToCart("Coca Cola", 2, 1);
		shoppingCart.addItemToCart("Fanta", 2, 1);
		shoppingCart.addItemToCart("Luk", 2, 1);
		var vr = shoppingCart.listCart().length;
		assert.equal(shoppingCart.listCart().length, 3);
	});
	it('Brojanje artikala', function(){
		assert.equal(shoppingCart.totalCount(), 3);
	});
	it('Ukupan iznos racuna', function(){
		assert.equal(shoppingCart.totalCart(), 6);
	});
	it('Brisanje elementa iz korpe', function(){
		shoppingCart.removeItemFromCart("Luk");
		assert.equal(shoppingCart.listCart().length, 2);
	});
	it('Brisanje svih elemenata iz korpe', function(){
		shoppingCart.clearCart();
		assert.equal(shoppingCart.listCart().length, 0);
	});
});

