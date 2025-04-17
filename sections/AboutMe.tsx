import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <div id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}

    <div className="grid md:grid-cols-4 gap-12">
      <div className="relative col-span-1 hidden md:block">
        <Image
          fill
          alt="Selfie Boy"
          src="/images/about-me/kazuha.svg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>Hey there!</p>

        <p>
          Hey, I'm Azri, a passionate Computer Forensics student at Management and Science University (MSU), 
          deeply interested in the world of cybersecurity, digital forensics, and software development. 
          My academic journey has shaped me into someone who's not just focused on code, 
          but also on building practical, user-focused tools that make a real difference.
        </p>

        <p>
          I'm currently developing LockMe, a desktop application for file encryption and decryption as my Final Year Project. 
          With LockMe, my goal is to provide a simple yet secure way for users to protect their personal and confidential files, 
          helping people take control of their own digital privacy with confidence and ease.
        </p>

        <p>
          Outside the tech space, I'm a huge fan of drawing, anime, and exploring the behind-the-scenes production of how animated stories are crafted. 
          From storyboarding to animation direction, I love learning how creators bring entire worlds to life. 
          This creative curiosity often crosses over into my design work, especially when I'm working on UI/UX or imagining how users interact with the tools I build.
        </p>

        <p>
          I also do photography as a hobby, capturing everyday moments and turning them into visual stories. 
          Whether it's landscapes, portraits, or street scenes, photography helps me slow down and see the world differently.
        </p>

        <p>
          I created this website so I could showcase all this and through this process, make it easier for you to
          connect with me. If you like what you see, head over to the <a href="#contact">contact section</a> below and
          send me a text, or whatever. I would love to hear from you!
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
