import React from "react"

function BusinessForm({addNewBusiness}) {

    function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;

        const businessData = {
            name: formElement["name"].value,
            address: formElement["address"].value,
            phone_number: formElement["phone_number"].value,
        }

        addNewBusiness(businessData);

        formElement.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Add a Business</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="address" placeholder="Address" />
            <input type="text" name="phone_number" placeholder="Phone Number"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default BusinessForm;