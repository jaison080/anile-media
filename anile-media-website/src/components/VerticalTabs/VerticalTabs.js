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
      className={styles.box}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={styles.tabs}
      >
        <Tab className={styles.tab} label="CREATIVE" {...a11yProps(0)} />
        <Tab className={styles.tab} label="MEDIA" {...a11yProps(1)} />
        <Tab className={styles.tab} label="STRATEGY" {...a11yProps(2)} />
        <Tab className={styles.tab} label="NETWORK" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} className={styles.tab_1}>
      Quality, consistency, and cadence are crucial to a successful content marketing operation. We lean on the power of all our creative ideas, both client and agency to find “right” based on consumer reactions vs guessing and having to be right with our opinions and subjectivity. The result? Powerful creative that works born from the consumer up.  Thus, we have unique insight into what works for you, what doesn’t, and what surprising things can drastically improve your results and up your game.
      </TabPanel>
      <TabPanel value={value} index={1} className={styles.tab_1}>
      We know you are addicted to social media but guess what? We are going to get you more addicted in most effective way. This means having a deep respect and intimate knowledge of channels where consumers are spending their time, and building modern planning, buying and analytics disciplines that drive consumers to act.  Targeting demographics, running alongside fads and trends, catering to users’ needs and acknowledging quality feedback along with potential improvements, we take care of it all.
      </TabPanel>
      <TabPanel value={value} index={2} className={styles.tab_1}>
      We put human beings at the forefront of everything we do, ensuring our ideas and plans are culturally rich and consumer-led. Thought leadership, expertise and industry research delivered daily, weekly and monthly, we keep brands on cutting edge. We are as fanatical as you are about focusing on building relationships, cherishing success, scaling what works, testing, finding solutions and celebrating fruitful results louder than ever.
      </TabPanel>
      <TabPanel value={value} index={3} className={styles.tab_1}>
      Whether you’re looking for a production house to film your latest video or a developer to code an interactive website, we have the skills and the expert referral to get it done and execute it for you. With an immense spider-web of networks that is a real game-changer with awareness and insight, we help you reach new audiences and create effective amplification for your brand communication.
      </TabPanel>
    </Box>
  );
}