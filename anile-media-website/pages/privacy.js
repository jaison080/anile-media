import Head from "next/head";
import Navbar from "src/components/Navbar/Navbar";
import styles from '../src/components/css/privacy.module.css'
function Privacy()
{
    return(
        <div>
            <Head>
        <title>Anile Media | Privacy Policy</title>
      </Head>
      <Navbar/>
      <main>
        <div className={styles.container}>
      <div className={styles.title}>Privacy Policy</div>
            <div className={styles.description}>At Anile Media , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Anile Media and how we use it.If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Anile Media. This policy is not applicable to any information collected offline or via channels other than this website.</div>
            <div className={styles.title_1}>Consent</div>
                <ul className={styles.description}>
                    <li >By using our website, you hereby consent to our Privacy Policy and agree to its terms.</li>
                </ul>
            <div className={styles.title_1}>Information We Collect</div>
                <ul className={styles.description}>
                    <li >The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
</li>
<li >If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
<li >When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
</li>
                </ul>
                <div className={styles.title_1}>How We Use Your Information</div>
                <div className={styles.description}>We use the information we collect in various ways, including to:</div>
                <ul className={styles.description}>
                    <li >Provide, operate, and maintain our website.
</li>
<li >Improve, personalize, and expand our website.
</li>
<li >Understand and analyze how you use our website.
</li>
<li >Develop new products, services, features, and functionality.
</li>
<li >Send you emails.
</li>
<li >Find and prevent fraud.
</li>
                </ul>
                <div className={styles.title_1}>Log Files</div>
                <div className={styles.description}>Anile Media follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</div>
                <div className={styles.title_1}>Cookies and Web Beacons</div>
                <div className={styles.description}>Like any other website, Anile Media uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</div>
                <div className={styles.title_1}>Advertising Partners Privacy Policies</div>
                <div className={styles.description}>You may consult this list to find the Privacy Policy for each of the advertising partners of Anile Media.Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Anile Media, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.Note that Anile Media has no access to or control over these cookies that are used by third-party advertisers.</div>
                <div className={styles.title_1}>Third Party Privacy Policies</div>
                <div className={styles.description}>Anile Media's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</div>
                <div className={styles.title_1}>CCPA Privacy Rights (Do Not Sell My Personal Information)</div>
                <div className={styles.description}>Under the CCPA, among other rights, California consumers have the right to:</div>
                <ul className={styles.description}>
                    <li >Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
</li>
<li >Request that a business delete any personal data about the consumer that a business has collected.

</li>
<li >Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
</li>
<li >If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
</li>
                </ul>

                <div className={styles.title_1}>GDPR Data Protection Rights</div>
                <div className={styles.description}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</div>
                <ul className={styles.description}>
                    <li >The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
</li>
<li >The right to erasure – You have the right to request that we erase your personal data, under certain conditions.


</li>
<li >The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
</li>
<li >The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
</li>
                </ul>
                <div className={styles.description}>If you would like to exercise any of these rights, please contact us.</div>
                
                <div className={styles.title_1}>Children's Information</div>
                <div className={styles.description}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.



Anile Media does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</div>
                </div>
            </main>
            </div>
    );
}
export default Privacy