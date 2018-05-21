
export class profileFolderListItems {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <ListItem button>
         <ListItemIcon>
           <SendIcon />
         </ListItemIcon>
         <Badge badgeContent={3} color='primary'>
           <ListItemText primary='Events attending' onClick={() => this.props.onSelectChange('events')}
         </Badge>
         </ListItem>
         <ListItem button>
           <ListItemIcon>
            <CreateIcon />
           </ListItemIcon>
         <ListItemText primary='New Event' />
        </ListItem>
      </div>
    )
  }
  
  
}

)