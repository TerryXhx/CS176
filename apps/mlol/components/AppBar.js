import {
  IconButton,
  AppBar as AppBarMui,
  Toolbar,
  fade,
  TextField,
  InputAdornment
} from '@material-ui/core';
import { Subject, Search, SportsEsports } from '@material-ui/icons';
import { AppstoreFilled } from '@ant-design/icons'
import styles from '../styles/AppBar.module.css'

export default function AppBar() {
  return (
    <AppBarMui position="fixed" variant="outlined" style={{background:"white"}}>
      <Toolbar variant="dense" className={styles.toolBar} disableGutters={true}>
        <IconButton className={styles.iconButton}>
          <Subject />
        </IconButton>
        <TextField
          style={{flexGrow: "5"}}
          id="input-with-icon-textfield"
          variant="filled"
          placeholder="云顶第五赛季"
          size="small"
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <div className={styles.icons}>
          <div className={styles.gridIcon}>
            <IconButton className={styles.iconButton}>
              <AppstoreFilled />
            </IconButton>
          </div>
          <div className={styles.gameIcon}>
            <IconButton className={styles.iconButton}>
              <SportsEsports />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBarMui>
  );
}