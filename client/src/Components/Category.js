import React from 'react';

const Category = props => {
    const { order, type, category, options, checkHandler } = props;

    return (
        <div className="category">
            {
                options.map((item, i) =>
                    <div key={i} className="option">
                        <input
                            type={ type } name={ item.name } className="checkbox" id={ item.name.replace(/ /g, "") }
                            checked={ order[category].includes(item.name) } onChange={ checkHandler }
                        />
                        <label className="label" htmlFor={ item.name.replace(/ /g, "") }>
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