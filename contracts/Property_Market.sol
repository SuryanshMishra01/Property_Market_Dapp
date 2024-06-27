// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract Property_Market {
    struct Property {    //this struct represents a property in list
        uint id;
        string name;
        string location;
        uint price;
        string image;  
        address payable owner;
        bool purchased;
    }

    mapping(uint => Property) public properties;
    uint public propertyCount =0;

    //function to add a property in the list for selling
    function addProperty(string memory _name, string memory _location, uint _price, string memory _image) public {
        propertyCount++;
        properties[propertyCount] = Property(propertyCount, _name, _location, _price, _image, payable(msg.sender), false);
    }

    function buyProperty(uint _id) public payable { //function to buy a property
        Property memory _property = properties[_id];
        require(_property.id > 0 && _property.id <= propertyCount);
        require(msg.value >= _property.price);
        require(!_property.purchased); // true when property is not purchased yet

        _property.owner.transfer(msg.value);
        _property.purchased = true;
        properties[_id] = _property;
    }
}
