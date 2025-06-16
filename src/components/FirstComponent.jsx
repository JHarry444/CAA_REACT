// function FirstComponent() {

// }

// const FirstComponent = function() {

// }
// doesnt matter what kind of function declaration you use

// components must rerturn a single parent element
// parent element can be a fragment <>
export default function FirstComponent() {

    return (
        <>
            <h1>My heading</h1>
            <p>My text</p>
        </>

    );
}