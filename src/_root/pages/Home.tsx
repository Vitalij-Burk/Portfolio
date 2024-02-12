import { IProjectLink, IServiceLink, ISkillLink } from "../../types";
import { projectLinks, serviceLinks, skillLinks } from "../../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`home-container ${theme} `}>
      <nav className="topbar">
        <h1 className="h2-bold">Vitalij Burk</h1>
        <img
          src={
            theme === "light"
              ? "/public/assets/icons/moon.png"
              : "/public/assets/icons/sun.png"
          }
          alt="moon"
          className=" w-9 h-9"
          onClick={changeTheme}
        />
      </nav>
      <div className="home-inner_container">
        <div className="general">
          <div className="greeting">
            <div className="flex-col">
              <h2 className="text-primary-600 h1-bold">Vitalij Burkasov</h2>
              <p className="pt-4 h4-bold px-5">React Web Developer</p>
              <p className="base-semibold px-6 pt-5">
                I'm Freelancer, who need you!
              </p>
              <p className="base-semibold px-14 pt-2">
                Let's work <span className="text-primary-600">together!</span>
              </p>
            </div>
            <div className="pt-10 items-center">
              <div className="flex justify-center p-2 rounded-full dark:bg-primary-600">
                <img
                  src="/public/assets/icons/github.png"
                  alt="github"
                  className="mr-10 "
                  width={52}
                  height={52}
                />
                <img
                  src="/public/assets/icons/whatsapp.png"
                  alt="whatsapp"
                  className="mr-10"
                  width={52}
                  height={52}
                />
                <img
                  src="/public/assets/icons/telegram.png"
                  alt="telegram"
                  width={50}
                  height={50}
                />
              </div>
              <img
                src="/public/assets/icons/person.png"
                alt=""
                width={300}
                height={300}
                className=" rounded-full bg-gradient-to-b from-primary-600 fill object-cover mt-16"
              />
            </div>
          </div>
          <section className="about">
            <div className="h3-bold">
              <div>
                <h4>About Me</h4>
                <p>
                  I'm a Junior React Web Developer and I will happy to work
                  together with you.
                </p>
              </div>
              <div>
                <h4>Experience</h4>
                <p>
                  I know languages like Javascript and Typescript. Usually I use
                  React.js framework for working. Also I know CSS-3, HTML-5 and
                  SASS. I use package managers: Vite, Webpack, Gulp. Also I use
                  for my working npm and yarn. I use databases like Prisma.
                </p>
              </div>
              <div>
                <h4>Education</h4>
                <p>
                  I always trying to learn something new and have many
                  practices. Now I want to learn more Back-End.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="plusses">
          <div>
            <h3 className="h2-bold pb-6 text-center">Plusses to choose me</h3>
            <ul className="flex gap-10 m-2">
              {serviceLinks.map((service: IServiceLink) => {
                return (
                  <li key={service.label} className="skill-link group w-16">
                    <img src={service.imgUrl} alt={service.label} />
                    <h4 className=" justify-center pt-2 text-center h4-bold">
                      {service.label}
                    </h4>
                    <p className="">{service.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="skills">
          <div>
            <h3 className="h2-bold text-center">My Tech Stack</h3>
            <ul className="flex gap-10 m-2">
              {skillLinks.map((link: ISkillLink) => (
                <li key={link.label} className="skill-link group w-16">
                  <img src={link.URL} alt={link.label} className="w-14" />
                  <p className=" justify-center pt-2 pr-2 text-center">
                    {link.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="projects">
          <div>
            <h3 className="h2-bold text-center pb-4">My Projects</h3>
            <div>
              <ul>
                {projectLinks.map((link: IProjectLink) => (
                  <li key={link.label} className="pb-10 group lg:p-10">
                    <img src={link.imgUrl} alt="project" className="rounded-lg mb-4 sm:m-6 sm:max-w-sm" />
                    <p className="h3-bold text-center">
                      {link.label}
                    </p>
                    <p className="body-medium text-center pt-2 pb-7">{link.text}</p>
                    <Link to={link.link}>
                      <p className="text-center body-regular p-3 bg-violet-300 rounded-lg">Go to site</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
