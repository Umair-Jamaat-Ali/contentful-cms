import { client } from "@/app/lib/contentfulClient";

const fetchFooter = async () => {
    let response = await client.getEntries ({content_type: "footer"});
    // console.log("fetchFooter", response.items[0].fields);

    const footer = await response.items.map((item) => {
        return{
            about : item.fields.aboutUs,
            desc : item.fields.description,
            developer : item.fields.aboutDeveloper,
        }
    })
    return footer
}


const Footer = async (props) => {

    const data = await fetchFooter();

    return (
        <div>
             <section className="footer">
        <hr/>
        <h4>About Us</h4>

        {data.map((item) => {
            return(
                <p>{item.desc}</p>
            )
        })}
        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Umair Jamaat Developer</a></p>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
        </div>
    );
}

export default Footer;
