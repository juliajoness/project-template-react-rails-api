import { Item } from 'semantic-ui-react'
import { Statistic } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

function StepCard({step_count, date}) {


    return (
<Card.Group>
    <Card> date: {date} steps: {step_count} </Card>
  </Card.Group>


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