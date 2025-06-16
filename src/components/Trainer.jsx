import PropTypes from "prop-types";

function Trainer({name, age, specialty}) {

    return ( <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Specialty: {specialty}</p>
    </> );
}

export default Trainer;

//  old and busted (use TS)
Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    specialty: PropTypes.string.isRequired
}