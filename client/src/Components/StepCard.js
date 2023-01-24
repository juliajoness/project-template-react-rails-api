import { Card } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
function StepCard({date, step_count, id, removeStep, step, showChosenStep}) {


    const handleTrash = () => {
        fetch(`/steps/${id}`, {method: "DELETE",});
        removeStep(step)
}
console.log(showChosenStep)

    return (
        <div>
            <Card.Group>
                <Card> date: {date} steps: {step_count} </Card>
            </Card.Group>
            <button onClick={handleTrash} className="emoji-button delete">
          🗑
        </button>
        <NavLink className="button" to={`/step/${id}`}>
          <button className ="ui primary labeled icon button" >        
              <i className= "hand point right outline"></i>
              Add Categroy
          </button>
    
        </NavLink>
        </div>

/* <div>
    
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{date}</Statistic.Value>
        <Statistic.Label>Date</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{step_count}</Statistic.Value>
        <Statistic.Label>Step Count</Statistic.Label>
      </Statistic>
    </Statistic.Group>

  </div> */
  

//         <Item.Group>
//     <Item>
//       <Item.Content verticalAlign='middle'>
//         <Item.Header as='a'>{date}: {step_count} steps</Item.Header>
//       </Item.Content>
//     </Item>
//   </Item.Group>



            // <div>
            //     <h3>{date}: {step_count} steps</h3>
            // </div>


        )
}

export default StepCard;