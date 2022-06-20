import BlogsCard from "./BlogsCard";
import styles from "./Blogs.module.css"
function Blogs()
{
    return(
        <div>
            <div className={styles.h1_landing}>The Drop</div>
    <div className={styles.row_card_3}>
    <BlogsCard/>
</div>
        </div>
    );
}
export default Blogs;