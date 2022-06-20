import styles from './Footer.module.css'
function Footer()
{
    return(
        <div>
           <footer class={styles.footer}>
	<div class={styles.content}>
		<div class={styles.top}>
			<div class={styles.logo_details}>
				<span class={styles.logo_name}>Anile Media</span>
			</div>
			<div class={styles.media_icons}>
				<a href="/"><i class="fa fa-facebook"></i></a>
				<a href="/"><i class="fa fa-twitter"></i></a>
				<a href="/"><i class="fa fa-instagram"></i></a>
				<a href="/"><i class="fa fa-linkedin"></i></a>
				<a href="/"><i class="fa fa-youtube"></i></a>
			</div>
		</div>
		<div class={styles.link_boxes}>
			<ul class={styles.box}>
				<li class={styles.link_name}>Links</li>
				<li><a href="/">Home</a></li>
				<li><a href="/">Contact</a></li>
				<li><a href="/">About Us</a></li>
				<li><a href="/">Get Started</a></li>
			
			</ul>
			<ul class={styles.box}>
				<li class={styles.link_name}>Services</li>
				<li><a href="/">App Design</a></li>
				<li><a href="/">Web Design</a></li>
				<li><a href="/">Logo Design</a></li>
				<li><a href="/">Banner Design</a></li>
			
			</ul>
	<ul class={styles.box}>
				<li class={styles.link_name}>Other services</li>
				<li><a href="/">SEO</a></li>
				<li><a href="/">Content Marketing</a></li>
				<li><a href="/">Prints</a></li>
				<li><a href="/">Social Media</a></li>
			
			</ul>
			<ul class={styles.box}>
				<li class={styles.link_name}>Contact</li>
				<li><a href="/">+91 xxxxxxxx</a></li>
				<li><a href="/">+91 xxxxxxxx</a></li>
				<li><a href="/">test@anilemedia.com</a></li>
				
			
			</ul>
			
	
	
	
		</div>
	</div>
	    <div class={styles.bottom_details}>
      <div class={styles.bottom_text}>
        <span class={styles.copyright_text}>Copyright © 2022 <a href="/">Anile Media.</a></span>
        <span class={styles.policy_terms}>
          <a href="https://anilemedia.netlify.app/posts/RXFrfPqIuhHAxx7wPV9L">Privacy Policy</a>
          
        </span>
      </div>
    </div>
</footer>
</div>
    );
}
export default Footer