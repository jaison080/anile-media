import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './VerticalTabs.module.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className={styles.tab_1}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography className={styles.tab_1}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: 'flex',marginTop:'50px'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'gray' }}
      >
        <Tab className="tab" label="Item One" {...a11yProps(0)} />
        <Tab className="tab" label="Item Two" {...a11yProps(1)} />
        <Tab className="tab" label="Item Three" {...a11yProps(2)} />
        <Tab className="tab" label="Item Four" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} className="tab-1">
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} className="tab-1">
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} className="tab-1">
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} className="tab-1">
        Item Four
      </TabPanel>
    </Box>
  );
}