import Button from "./(components)/button/Button";
import NavBar from "./(components)/navbar/NavBar";
import TextCard from "./(components)/textCard/textCard";
import { client } from "./lib/contentfulClient";


const fetchCourses = async () => {
  let response = await client.getEntries ({content_type: "course"});
//  console.log("fetchCourses", response.items[0].fields);
  const course = await response.items.map((item) => {
    return{
      title: item.fields.title,
      des: item.fields.description,
    }
  })
  return course
  // console.log("course", course);
}



export default async function Home() {
 const data = await fetchCourses();
  return (
    <>
      <section class="header">
        <NavBar />
        <div class="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          {/* <a href="#" class="hero_btn">Visit Us To Know More</a> */}
          <Button title="Visit Us To Know More" />
        </div>
      </section>

      <section class="course">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          {data.map((item)=>{
            return(
              <TextCard title={item.title} des={item.des} />
          )})}
          
          
        </div>
      </section>

      <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" class="hero_btn">CONTACT US</a>
      </section>

    </>
  )
}
