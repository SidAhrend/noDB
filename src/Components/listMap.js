import React from 'react'; 


const List = props => (
<ul>
    {props.item}
    <button onClick={() => props.deleteComment(props.index)}>delete</button>
</ul>
);

export default List;

