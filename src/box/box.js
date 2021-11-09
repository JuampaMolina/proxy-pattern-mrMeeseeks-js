function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

var factory = ( function singletonBox() {
    const caja = new Box();

    return {
        getBox: () => caja
    }
})();

exports.singletonBox = factory;