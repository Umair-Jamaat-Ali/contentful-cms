import Button from "../(components)/button/Button";
import Header from "../(components)/header/Header";
import Image from "next/image";


const About = () => {
    return (
        <div>
           <Header title="About Us"/>
           <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
            <Button title="EXPLORE NOW"/>
            </div>
            <div className="about-col">
                <Image src="/img/about.png"  width={'100'}
            height={'300'} alt="" />
            </div>
        </div>
    </section>
        </div>
    );
}

export default About;
