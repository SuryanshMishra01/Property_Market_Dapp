import React, { useEffect, useState } from 'react';
import getPropertyMarket from './PropertyMarket';
import { provider } from './ethers';
import {ethers, formatEther, parseUnits } from 'ethers';

const ItemList = () => {
    const [properties, setProperties] = useState([]);
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');
    const [newProperty, setNewProperty] = useState({
        name: '',
        location: '',
        price: '',
        image: ''
    });

    useEffect(() => {
        const loadProperties = async () => {
            try {
                const propertyMarket = await getPropertyMarket();
                if (!propertyMarket) return;

                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);

                const balance = await provider.getBalance(accounts[0]);
                setBalance(formatEther(balance));

                const propertyCount =  parseInt(await propertyMarket.propertyCount());
                const properties = [];
                console.log(propertyCount);
                for (let i = 1; i <= propertyCount; i++) {
                    const property = await propertyMarket.properties(i);
                    properties.push(property);
                }
                setProperties(properties);
            } catch (error) {
                console.error("Error loading properties:", error);
            }
        };

        loadProperties();
    }, []);

    const buyProperty = async (id, price) => {
        try {
            const propertyMarket = await getPropertyMarket();
            if (!propertyMarket) return;
            if (!price) {
                throw new Error("Price is not defined");
            }
            const tx = await propertyMarket.buyProperty(id, {
                value: price
            });
            await tx.wait(); // Wait for transaction to be mined
            // Update the property status to purchased in the state
            setProperties(properties.map(p => p.id === id ? { ...p, purchased: true } : p));
        } catch (error) {
            console.error("Error buying property:", error.message);
        }
    };

    const handleAddProperty = async () => {
        const { name, location, price, image } = newProperty;
        try {
            const propertyMarket = await getPropertyMarket();
            if (!propertyMarket) return;

            const priceInWei = parseUnits(price, 'ether');

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts[0]);
            const tx = await propertyMarket.addProperty(name, location, priceInWei, image, { from: accounts[0], gasLimit: 3000000 });
            await tx.wait(); // Wait for transaction to be mined

            // Get the updated property count and the newly added property
            const propertyCount = await propertyMarket.propertyCount();
            const property = await propertyMarket.properties(propertyCount);

            // Update the state with the newly added property
            setProperties([...properties, property]);

            // Reset the new property form
            setNewProperty({
                name: '',
                location: '',
                price: '',
                image: ''
            });
        } catch (error) {
            console.error("Error adding property:", error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProperty(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Ethereum Balance: {balance} ETH</h2>

            <div>
                <h3>Add New Property</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newProperty.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={newProperty.location}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Price in ETH"
                    value={newProperty.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProperty.image}
                    onChange={handleChange}
                />
                <button onClick={handleAddProperty}>Add Property</button>
            </div>

            {properties.map(property => (
                <div key={property.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                    <img src={property.image} alt={"Image not loaded: "+property.name} style={{ width: '100px', height: '100px' }} />
                    <p>{property.name}</p>
                    <p>Location: {property.location}</p>
                    <p>{formatEther(property.price)} ETH</p>
                    <button onClick={() => buyProperty(property.id,property.price)} disabled={property.purchased}>
                        {property.purchased ? 'Purchased' : 'Buy'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
