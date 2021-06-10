import React from 'react';
import { Link, withRouter } from "react-router-dom";
import logo from './shared/logo.png';
import './App.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PieChartIcon from '@material-ui/icons/PieChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MailIcon from '@material-ui/icons/Mail';
import { WindicesTheme as wTheme } from './shared/WindicesTheme'
import MainContent from './components/mainContent';
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 240;

const routes = [
  {
    linkName: "Dashboard",
    path: '/home',
    icon: () => <DashboardIcon />
  },
  {
    linkName: "Teammates",
    path: '/team',
    icon: () => <GroupIcon />
  },
  {
    linkName: "Reports",
    path: '/reports',
    icon: () => <AssessmentIcon />
  },
  {
    linkName: "Application",
    path: '/application',
    icon: () => <AssignmentIcon />
  },
  {
    linkName: "Tasks",
    path: '/tasks',
    icon: () => <PieChartIcon />
  },
  {
    linkName: "E-Mail",
    path: '/email',
    icon: () => <MailIcon />
  },
  {
    linkName: "Calender",
    path: '/calender',
    icon: () => <CalendarTodayIcon />
  },
]

const App = withRouter((props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // useEffect(() => {
  //   console.log(props.location.pathname);
  // }, [])

  const handleDrawerOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      </AppBar>
      <Drawer
        variant="permanent"
        className={open ? classes.drawerOpen : classes.drawerClose}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon fontSize='large' />
            </IconButton>

            <ListItem button style={{ paddingLeft: 5 }}>
              <ListItemText className={classes.listText}
                primary={
                  <div>
                    <img style={{ width: 150 }} alt={'windices'} src={logo}></img>
                  </div>} />
            </ListItem>
          </div>
          <Divider className={classes.divider} />
          <br />
          <List
            className={open ? classes.listOpen : classes.listClose}>
            {routes.map((r, index) => (
              <Link to={r.path} style={{ width: '117%' }} key={r.linkName}>
                <ListItem button
                  style={{
                    borderBottomLeftRadius: 50,
                    borderTopLeftRadius: 50
                  }}
                  className={clsx(
                    {
                      [classes.navItems]: props.location.pathname === r.path,
                      [classes.listItemOpen]: open,
                      [classes.listItemClose]: !open,
                    })}>
                  <ListItemIcon style={props.location.pathname === r.path ? { color: '#2329c4' } : { color: '#fff' }}>{r.icon()}</ListItemIcon>
                  <ListItemText className={clsx({
                    [classes.navlinkText]: props.location.pathname !== r.path,
                    [classes.navlinkTextActive]: props.location.pathname === r.path
                  })} primary={r.linkName} />
                  {/* {(open && props.location.pathname === r.path) ? null : <Visibility fontSize='small' style={{ marginRight: 60, color: '#eeefff' }} />} */}
                </ListItem>
              </Link>
            ))}
          </List>

        </div>

        <List className={open ? classes.listOpen : classes.listClose}>
          {[{
            linkName: 'Logout',
            icon: () => <ExitToAppIcon />
          }, {
            linkName: 'Settings',
            icon: () => <SettingsIcon />
          }].map((val, index) => (
            <ListItem button key={val.linkName}
              className={open ? classes.listItemOpen : classes.listItemClose}>
              <ListItemIcon style={{ color: '#FFFFFF' }}>{val.icon()}</ListItemIcon>
              <ListItemText primary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>{val.linkName}</Typography>} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainContent />
      </main>
    </div >
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  listText: {
    color: '#FFFFFF',
    ...wTheme.Body
  },
  navlinkText: {
    color: '#FFF',
    textDecoration: 'none'
  },
  navlinkTextActive: {
    color: '#2329c4'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 2
  },

  navItems: {
    backgroundColor: '#e4f2ff',
    color: '#000',
    boxShadow: '10px 10px 6px -4px rgba(0,0,0,0.2) inset',
    '&:hover': {
      backgroundColor: '#e4f2ff'
    }
  },

  listOpen: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  listItemOpen: {
    marginLeft: theme.spacing(5)
  },

  listClose: {
    marginLeft: theme.spacing(1)
  },
  listItemclose: {},

  hide: {
    display: 'none',
  },
  divider: {
    backgroundColor: '#ffffff42',
    alignSelf: 'center',
    width: '70%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  paper: {
    background: wTheme.colorCodes.background1,
    color: 'white',
    display: 'flex',
    borderRight: 'none',
    overflowX: 'hidden',
    justifyContent: 'space-between'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 2),
    ...wTheme.Navlinks
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0, 2),
    backgroundColor: '#e4f2ff',
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    ...wTheme.body
  },
}));

export default App;
