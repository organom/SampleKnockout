// ViewModel for the default page
// This viewmodel does auto registration on the view that uses it.

var ViewModel = function (first, last) {
    var self = this;

    // Class definition
    function namesItem(name, alias) {
        var itemSelf = this;
        itemSelf.name = name;
        itemSelf.alias = alias;
    }

    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.computed(
        function () {
            return this.firstName() + " " + this.lastName();
        }, this);

    this.changeText = function () {
        this.firstName("Hello");
        this.lastName("World!");
    };

    this.addNames = function () {
        self.namesCollection.push( new namesItem("name" + self.namesCollection().length, "alias" + self.namesCollection().length));
    };

    this.removeName = function (item) {
        self.namesCollection.remove(item);
    };

    this.namesCollection = ko.observableArray([
            new namesItem("name0", "alias0")
        ]);
};

// Auto register on the view
ko.applyBindings(new ViewModel("Albert", "Earth"));