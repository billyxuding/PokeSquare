import React from 'react';

const Bases = props => {
	const { options, checkHandler } = props;

    return (
        <div className="category">
			{
				options.map((item, i) =>
					<div key={i} className="option">
						<input type="radio" name="base" value={ item.value } className="checkbox" id={ item.id } checked={ item.checked } onChange={ checkHandler } />
						<label className="label" htmlFor={ item.id }>
							<h3>{ item.value }</h3>
							<img src={ item.src } alt={ item.value } />
						</label>
					</div>
				)
			}
        </div>
    )
};

export default Bases;