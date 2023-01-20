import { Item } from 'semantic-ui-react'
import { Statistic } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

function StepCard({ 
    step: { date, step_count, id},
    // step_count, date, 
    removeStep, step}) {

        function handleDeleteClick() {
            fetch(`/steps/${id}`, {
              method: "DELETE",
            });
            removeStep(id);
          }
const handleTrash = () => {
    removeStep(step)
}

    return (
        <div>
            <Card.Group>
                <Card> date: {date} steps: {step_count} </Card>
            </Card.Group>
            <button onClick={handleTrash} className="emoji-button delete">
          🗑
        </button>
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