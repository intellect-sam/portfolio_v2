import {
  js,
  css,
  html,
  reactlogo,
  boot,
  tailwind,
  code,
  code2,
} from '../assets/images';
import { FaGithub, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from '../style';
import { IconBaseProps } from 'react-icons';
import { handleWhatsApp } from './utils';

interface SocialMediaIconProps {
  platform: string;
  profileLink: string;
  icon: React.ReactElement<IconBaseProps>;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  profileLink,
  icon,
}) => {
  return (
    <a
      href={profileLink}
      target="_blank"
      rel="noopener noreferrer">
      {icon}
    </a>
  );
};

const Hero = () => {
  return (
    <section
      className={`flex flex-col-reverse justify-center py-[120px] md:py-[250px] 
                        px-5 md:gap-5 md:flex-row md:mx-40 md:flex md:px-96 max-h-screen ${styles.textWhite}`}>
      <img
        src={code2}
        alt=""
        className="absolute md:top-[-450px] top-[-50px] left-[-100px] 
            opacity-10 md:left-[-550px] md:opacity-5 w-1/2 -z-50"
      />
      <img
        src={code}
        alt=""
        className="absolute md:top-[-200px] top-[250px] 
            left-0 w-[900px] md:w-full opacity-5 md:opacity-10 -z-50"
      />
      <div className="justify-center text-center md:mt-0 md:text-left">
        <div className="w-full text-[30px] font-bold tracking-wide md:text-8xl font-pop text-shadow-xl ">
          Aluko O. Samuel
        </div>
        <p className="py-4 my-3 md:text-xl font-light text-justify text-[#8d9294] md:text-justify md:w-2/3">
          I'm a software engineer focused on building beautiful interfaces and
          experiences, specializing in crafting exceptional digital experiences.
          With a keen eye for design, I not only build but also contribute to
          the aesthetic aspects of the products I work on 👨‍💻
        </p>
        <div className="flex justify-center gap-3 text-sm font-light text-[#8d9294]  md:text-2xl md:justify-start md:items-start">
          <SocialMediaIcon
            platform="Twitter"
            profileLink="https://twitter.com/AlukoKunleSam"
            icon={<FaTwitter />}
          />
          <SocialMediaIcon
            platform="Github"
            profileLink="https://github.com/intellect-sam"
            icon={<FaGithub />}
          />
          <button onClick={handleWhatsApp}>
            <FaWhatsapp />
          </button>
          <SocialMediaIcon
            platform="Linkedin"
            profileLink="linkedin.com/in/olakunle-aluko-b62a52226"
            icon={<FaLinkedin />}
          />
        </div>
        <div className="py-10">
          <div>
            <p className={`bg-primary ${styles.Stack} py-5`}>Tech Stacks</p>
          </div>
          <div className="flex justify-center w-full gap-4 md:justify-start">
            <div className={`${styles.StackBox}`}>
              <img
                src={html}
                alt=""
              />
            </div>
            <div className={`${styles.StackBox}`}>
              <img
                src={css}
                alt=""
              />
            </div>
            <div className={`${styles.StackBox}`}>
              <img
                src={js}
                alt=""
              />
            </div>
            <div className={`${styles.StackBox}`}>
              <img
                src={tailwind}
                alt=""
              />
            </div>
            <div className={`${styles.StackBox}`}>
              <img
                src={boot}
                alt=""
              />
            </div>
            <div className={`${styles.StackBox}`}>
              <img
                src={reactlogo}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
