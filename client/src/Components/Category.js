import React from 'react';

const Category = props => {
	const { order, setOrder, name, id, src } = props;

	const checkHandler = e => {
        let newArray;
        if (e.target.checked) {
            newArray = [...order.sides, e.target.name];
        } else {
            newArray = order.sides.filter((item) => item !== e.target.name);
        }
        setOrder({
            ...order,
            sides: newArray
        });
    }

    return (
        <div className="ingredients">
			{/* map the passed in array of objects */}
            <div>
                <input type="checkbox" name={ name } className="checkbox" id={ id } onChange={ checkHandler } />
                <label className="label" htmlFor={ id }>
                    <h3>{ name }</h3>
                    <img src={ src } alt={ name } />
                </label>
            </div>
        </div>
    )
};

export default Category;