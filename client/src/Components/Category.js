import React from 'react';

const Category = props => {
	const { sides, checkHandler } = props;

    return (
        <div className="ingredients">
			{
				sides.map((item, i) =>
					<div key={i}>
						<input type="checkbox" name={ item.name } className="checkbox" id={ item.id } checked={ item.checked } onChange={ checkHandler } />
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