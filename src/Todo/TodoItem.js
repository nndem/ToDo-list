import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1 rem',
        border: '1px solid #ccc',
        marginBottom: '.5rem'
    },

    input: {
        marginRight: '1rem'
    }

}

const TodoItem =(props)=>{
    const {removeTodo} = useContext(Context)
    const classes = []

    if (props.todo.completed){
        classes.push('done')
    }
    return (<div>

        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                       type="checkbox"
                       checked = {props.todo.completed}
                       style={styles.input}
                       onChange={()=>props.onChange(props.todo.id)}/>

                <strong>{props.index+1}</strong>
                &nbsp;
                {props.todo.title}
            </span>

            <button className="rm"  onClick={()=>removeTodo(props.todo.id)}>&times; </button>
        </li>

    </div>)
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}




export default TodoItem