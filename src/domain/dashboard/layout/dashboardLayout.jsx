import {
  Box,
  Button,
  Fab,
  Grid,
  Icon,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Add,
  Assessment,
  BatteryChargingFull,
  Opacity,
} from "@material-ui/icons";
import React from "react";
import {
  DatePickers,
  MaterialUIPickers,
  MobileAppBar,
} from "../../../components";

const dashboardLayouStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#0C8596",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    margin: theme.spacing(1, "auto"),
    padding: theme.spacing(1),
    width: "100%",
    "& > p": {
      margin: theme.spacing(1, "auto"),
    },
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.3rem",
    fontFamily: "Hoko",
    flexGrow: 1,
  },
  snelIcon: {
    color: "#ffbb17",
  },
  regiIcon: {
    color: "#12CBE3",
  },
  addButtonSnel: {
    backgroundColor: "#ffbb17",
    color: "#fff",
  },
  addButtonRegi: {
    backgroundColor: "#12CBE3",
    color: "#fff",
  },
  blocStats: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0),
    margin: theme.spacing(1, 0),
    "& > h6": {
      fontFamily: "Hoko",
    },
  },
  titleStats: {
    flexGrow: 1,
  },
  blockStatReport: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .MuiBox-root": {
      padding: theme.spacing(1),
      width: 150,
      "& .MuiPaper-root": {
        width: "100%",
        textAlign: "center",
        padding: theme.spacing(2),
        color: "#fff",
        "& h3": {
          fontSize: "1.9rem",
        },
      },
    },
  },
  coupure: {
    backgroundColor: "red",
  },
  reprise: {
    backgroundColor: "green",
  },
}));

function DashboardLayout(props) {
  const classes = dashboardLayouStyles();

  return (
    <Grid container className={classes.root}>
      <Header />
      <ContentMenu classes={classes} />
    </Grid>
  );
}

function Header(props) {
  return (
    <Grid item container sm={12}>
      <MobileAppBar />
    </Grid>
  );
}

function ContentMenu(props) {
  const { classes } = props;
  return (
    <Grid item container sm={10} className={classes.main}>
      <SnelComponent styles={classes} />
      <RegidesoComponent styles={classes} />
    </Grid>
  );
}

function SnelComponent(props) {
  const { styles } = props;
  return (
    <Paper className={styles.content} elevation={4}>
      <Toolbar style={{ padding: 0 }}>
        <Icon edge="start">
          <BatteryChargingFull className={styles.snelIcon} />
        </Icon>
        <Typography variant="h6" className={styles.title}>
          SNEL
        </Typography>
        <Fab size="small" aria-label="add" className={styles.addButtonSnel}>
          <Add />
        </Fab>
      </Toolbar>
      <hr />
      <Toolbar className={styles.blocStats}>
        <Icon edge="start">
          <Assessment />
        </Icon>
        <Typography variant="h6" className={styles.titleStats}>
          Stats
        </Typography>
        <DatePickers />
      </Toolbar>
      <Grid container sm={10} item className={styles.blockStatReport}>
        <Box component="div">
          <Paper elevation={2} className={styles.coupure}>
            <h3>30</h3>
            <p>courupes</p>
          </Paper>
        </Box>
        <Box component="div">
          <Paper elevation={2} className={styles.reprise}>
            <h3>30</h3>
            <p>reprises</p>
          </Paper>
        </Box>
      </Grid>
    </Paper>
  );
}

function RegidesoComponent(props) {
  const { styles } = props;
  return (
    <Paper className={styles.content} elevation={4}>
      <Toolbar style={{ padding: 0 }}>
        <Icon edge="start">
          <Opacity className={styles.regiIcon} />
        </Icon>
        <Typography variant="h6" className={styles.title}>
          REGIDESO
        </Typography>
        <Fab size="small" aria-label="add" className={styles.addButtonRegi}>
          <Add />
        </Fab>
      </Toolbar>
      <hr />
      <Toolbar className={styles.blocStats}>
        <Icon edge="start">
          <Assessment />
        </Icon>
        <Typography variant="h6" className={styles.titleStats}>
          Stats
        </Typography>
        <DatePickers />
      </Toolbar>
      <Grid container sm={10} item className={styles.blockStatReport}>
        <Box component="div">
          <Paper elevation={2} className={styles.coupure}>
            <h3>30</h3>
            <p>courupes</p>
          </Paper>
        </Box>
        <Box component="div">
          <Paper elevation={2} className={styles.reprise}>
            <h3>30</h3>
            <p>reprises</p>
          </Paper>
        </Box>
      </Grid>
    </Paper>
  );
}

// function RegidesoComponent(props) {
//   const { styles } = props;
//   return (
//     <Paper className={styles.content} elevation={4}>
//       <Toolbar style={{ padding: 0 }}>
//         <Icon edge="start">
//           <Opacity className={styles.regiIcon} />
//         </Icon>
//         <Typography variant="h6" className={styles.title}>
//           REGIDESO
//         </Typography>
//         <Fab size="small" aria-label="add" className={styles.addButtonRegi}>
//           <Add />
//         </Fab>
//       </Toolbar>
//     </Paper>
//   );
// }

export default DashboardLayout;
