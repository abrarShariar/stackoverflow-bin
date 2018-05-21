import { profileFolderListItems, eventsFolderListItems} from './UserTitleData';

class UserProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null
    };
    
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }
  
  handleSelectOption(value) {
    this.setState({
        value: value
    });
  }

  render () {
    const { classes } = this.props;

    return (
      <div>

        <div className={classes.root}>
          <Drawer
            variant='permanent'
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
        
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {/* componentToDisplay goes here */}
            
            {this.state.value === 'events' ?
              (<List>
                <profileFolderListItems
                  onSelectChange={this.handleSelectOption}
                />
                </List>) : 
             this.state.value === 'profile' ?
               (
                 <List>
                   <profileFolderListItems
                     onSelectChange={this.handleSelectOption}
                   />
                 </List>
               ) : null}
               
          </main>
        </div>
      </div>
    )
  }