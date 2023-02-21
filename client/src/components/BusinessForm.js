import React from "react"

function BusinessForm({addNewBusiness,user}) {

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

    console.log(user.is_admin)

    return(
       <> {!user.is_admin ? 
        (<form onSubmit={handleSubmit}>
            <h1>Add a Business</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="address" placeholder="Address" />
            <input type="text" name="phone_number" placeholder="Phone Number"/>
            <button type="submit">Add</button>
        </form>) : "access denied"}</>
    );
}

export default BusinessForm;