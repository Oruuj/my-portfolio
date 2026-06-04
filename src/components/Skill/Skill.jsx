import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Skill.css";
import "swiper/css";

const skills = [
  {
    name: "React",
    description:
      "Building dynamic and interactive user interfaces with reusable components.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Creating responsive, modern, and maintainable user interfaces efficiently.",
  },
  {
    name: "JavaScript",
    description:
      "Developing interactive web applications with modern ES6+ features.",
  },
  {
    name: "C#",
    description:
      "Developing robust backend systems, APIs, and enterprise applications.",
  },
  {
    name: ".NET",
    description:
      "Building scalable web applications and RESTful services with ASP.NET.",
  },
  {
    name: "MS SQLs Server",
    description:
      "Designing, querying, and optimizing relational databases for performance.",
  },
  {
    name: "MySQL",
    description:
      "Managing structured data with efficient queries and database design.",
  },
  {
    name: "Entity Framework",
    description:
      "Simplifying database operations through object-relational mapping (ORM).",
  },
  {
    name: "REST API",
    description:
      "Creating secure and maintainable APIs for seamless data communication.",
  },
  {
    name: "Git",
    description:
      "Tracking code changes and collaborating efficiently in development teams.",
  },
  {
    name: "GitHub",
    description:
      "Managing repositories, version control, and collaborative workflows.",
  },
];

export default function Skills() {
  return (
    <section id="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <p>
          Technologies I use to build modern, responsive, and scalable web
          applications.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
