import React from 'react'
import {
    Button
} from 'react-bootstrap'

class ToDoItem extends React.Component{
    // componentWillUnmount(){
    //     alert('component will un')
    // }
    render (){
        return(
            <div style={styles.container}>
                <p style={styles.p}> ID: {this.props.data.id}, {this.props.data.name}</p>
                <div>
                    <Button variant="danger" onClick={this.props.delete} className="mr-2">Delete</Button> 
                    <Button variant="success" onClick={this.props.complete} disabled={this.props.isComplete}>
                        {this.props.data.isCompleted ? "Finished" : "Completed"}
                    </Button>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'salmon',
        width: '25vw',
        height: '8vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    p: {
        margin: '0px'
    }
}

export default ToDoItem