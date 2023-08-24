import React from "react";

function Home() {

    return (
        <div>
            Each "template" created is represented as a 2-property object. 
            One property being the id, which is used to complete the URL for that resource
            The other property being "data" which is an object itself containing the key:value pairs.
            The "title" of the template is stored as the ID. All other information is stored in the Data. 
            Nested 2-property objects can, in theory, be used to create more complex data structures. 
            (Keep this idea in mind for the future)
            <br />
            <br/>
            The app needs to reset the input fields to reflect the selected template as the option changes.
            The "title" field displaying the "id" resets to match the data, but the other fields do not.
            <br/>
            <br/>
            Removed "exact" from the Home route. When an incorrect URL is entered, then it will just load the Home component.
            However, when it does that, the URL remains the same incorrect one and doesn't update to reflect the Home component.
            Also, moved the Home route to the end bc it was returning true for every URI 
        </div>
    )
}

export default Home;