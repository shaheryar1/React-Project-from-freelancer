import React from 'react'
import { Tab ,Grid,GridColumn,GridRow,Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const panes = [
  { menuItem: 'مفضلتيخبراتي'}, 
  { menuItem: 'مفضلتيتي'},
  { menuItem: 'متيخبي'}
]

const TabbbedFeeds = () => (
<Grid columns='equal' style={{marginTop:"50px",marginLeft:"50px"}}>
    <Grid.Column width={8}>
      
    </Grid.Column>
    <Grid.Column width={3}>
     
      <Tab  menuPosition='center'  menu={{ secondary: true, pointing: true }} panes={panes}/>
        
   
    </Grid.Column>
    <Grid.Column width={8}>   
    </Grid.Column>
  </Grid>
    

 
)

export default TabbbedFeeds;