import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { exercises } from '../../store';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY:'auto'
    }
}

export default ({ exercises, category }) => 
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                    !category || category === group
                        ? <Fragment>
                            <Typography
                                variant="h5"
                                style={{ textTransform: 'capitalize' }}
                            >
                                {group}
                                <List component="ul">
                                    {exercises.map(({ title }) =>
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    )}
                                </List>
                            </Typography>
                        </Fragment>
                        : null
                )}
           </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                variant = "h2"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subtitle1"
                    style={{marginTop: "20px"}}
                >
                    Please select an exercise from the list on the left.
                </Typography>
           </Paper>
        </Grid>
    </Grid>