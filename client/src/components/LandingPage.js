import React from "react";
import './LandingPage.css'

function LandingPage(){
    return(
    //     <video controls width="250">
    
    //     <source src="/media/cc0-videos/flower.mp4"
    //             type="video/mp4">
    
    //     <a href="/media/cc0-videos/flower.mp4">MP4</a>
    // </video>
    
        // <div class="video-wrapper">
        //     <source src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcR5OK2Q6whM3OJ-Zy19jN1Upk9FhfGWmGXZGg"></source>
        //     <video autoplay="autoplay" loop="loop" muted="muted" width="1920" height="1080" playsinline="playsinline" preload="auto"></video>
        // {/* </div> */}
        <video autoPlay="autoplay" loop="loop" name="media" muted="muted"  width="100%" height="100%"><source src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcR5OK2Q6whM3OJ-Zy19jN1Upk9FhfGWmGXZGg" type="video/mp4"></source></video>
    );
}
export default LandingPage; 

// import React from "react"

// function BusinessForm({addNewBusiness,user}) {

//     function handleSubmit(event) {
//         event.preventDefault();
//         const formElement = event.target;

//         const businessData = {
//             name: formElement["name"].value,
//             address: formElement["address"].value,
//             phone_number: formElement["phone_number"].value,
//         }

//         addNewBusiness(businessData);

//         formElement.reset();
//     }

//     console.log(user.is_admin)

//     return(
//        <> {!user.is_admin ? 
//         (<form onSubmit={handleSubmit}>
//             <h1>Add a Business</h1>
//             <input type="text" name="name" placeholder="Name" />
//             <input type="text" name="address" placeholder="Address" />
//             <input type="text" name="phone_number" placeholder="Phone Number"/>
//             <button type="submit">Add</button>
//         </form>) : "access denied"}</>
//     );
// }

// export default BusinessForm;