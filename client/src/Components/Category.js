import React from 'react';

const Category = props => {
	const { order, setOrder, sides } = props;

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
			{
				sides.map((item, i) =>
					<div key={i}>
						<input type="checkbox" name={ item.name } className="checkbox" id={ item.id } onChange={ checkHandler } />
						<label className="label" htmlFor={ item.id }>
							<h3>{ item.name }</h3>
							<img src={ item.src } alt={ item.name } />
						</label>
					</div>
				)
			}
        </div>
    )
};

export default Category;