import Header from "../(components)/header/Header";
import ImageCard from "../(components)/imageCard/imageCard";
import TextCard from "../(components)/textCard/textCard";
import { client } from "../lib/contentfulClient";


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

const fetchBestCourses = async () => {
    let response = await client.getEntries({content_type: "bestCourses" })
    // console.log("fetchBestCourses", response.items[0].fields);

    const courses = response.items.map((item) => {
        return{
            image: item.fields.image.fields.file.url,
            title: item.fields.title,
            descr: item.fields.description
        }
    })
    return courses
}


const Courses = async () => {

    const data = await fetchCourses();
    const bestCourses = await fetchBestCourses();
    console.log("fetchBestCourses", bestCourses);

    return (
        <>
            <Header  title="our courses"/>
             <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            {data.map((item) => {
                return (
                    <TextCard title={item.title} des={item.des} /> 
                )
            })}
        </div>
    </section>

    <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            {bestCourses.map((item) => {
                return(
                    <ImageCard title={item.title} pic={item.image} descr={item.descr} /> 
                )
            })}
        </div>
    </section>
        </>
    );
}

export default Courses;
